import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue(Error);
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
