import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { changeFilter } from './contact-actions';

import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './contact-operations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  // [editContact.fulfilled]: (state, { payload }) => {
  //   const newState = state.filter(contact => contact.id !== payload.id);
  //   return [...newState, payload];
  // },
  [editContact.fulfilled]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => false,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => false,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
  [editContact.pending]: () => false,
  [editContact.fulfilled]: () => false,
  [editContact.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [addContact.rejected]: (_, { payload }) => payload,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.pending]: () => null,
  [deleteContact.pending]: () => null,
  [editContact.pending]: () => null,
  [editContact.rejected]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading, error });
