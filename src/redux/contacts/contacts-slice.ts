import { createSlice } from "@reduxjs/toolkit";
import {
  fetchAllContacts,
  addContact,
  deleteContact,
  updateContact,
} from "./contacts-operations";
import { ContactsState } from "../../types";

const pendingReducer = (state: ContactsState) => {
  state.isLoading = true;
};

const rejectedReducer = (state: ContactsState) => {
  state.isLoading = false;
};

const initialState: ContactsState = {
  items: [],
  isLoading: false,
  isRefresh: false,
};

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContacts.pending, pendingReducer)
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllContacts.rejected, rejectedReducer)
      .addCase(addContact.pending, pendingReducer)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [action.payload, ...state.items];
      })
      .addCase(addContact.rejected, rejectedReducer)
      .addCase(deleteContact.pending, pendingReducer)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, rejectedReducer)
      .addCase(updateContact.pending, (state) => {
        state.isLoading = true;
        state.isRefresh = true;
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isRefresh = false;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.slice(index, 0);
      })
      .addCase(updateContact.rejected, (state) => {
        state.isLoading = false;
        state.isRefresh = false;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
