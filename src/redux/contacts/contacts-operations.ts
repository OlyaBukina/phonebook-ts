import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ContactType } from "../../types";

export const fetchAllContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get("/contacts");
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact: ContactType, thunkAPI) => {
    try {
      const contacts = await axios.post("/contacts", { ...contact });
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const contacts = await axios.delete(`/contacts/${contactId}`);
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contacts/updateContact",
  async (credentials: ContactType, thunkAPI) => {
    const { id, name, number } = credentials;
    try {
      const contacts = await axios.patch(`/contacts/${id}`, { name, number });
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
