import { createSlice, nanoid } from "@reduxjs/toolkit";
import contactsData from "../components/Contact/contacts.json";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: contactsData },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(items) {
        return {
          payload: {
            id: nanoid(),
            ...items,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;
export const selectNameFilter = (state) => state.filters.name;
