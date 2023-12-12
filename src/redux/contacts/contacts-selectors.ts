import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

export const selectContacts = (state: RootState) => state.contacts;

export const selectFilter = (state: RootState) => state.filter;

export const selectVisibleContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, { items }) => {
    const normalizeFilter = filter.toLowerCase().trim();

    return items.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  }
);
