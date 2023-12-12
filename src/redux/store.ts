import { Reducer, UnknownAction, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contacts-slice";
import { filterReducer } from "./contacts/contacts-filter-slice";
import { authReducer } from "./auth/auth-slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AuthState } from "../types";
import { PersistPartial } from "redux-persist/es/persistReducer";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer) as Reducer<
      AuthState & PersistPartial,
      UnknownAction
    >,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
