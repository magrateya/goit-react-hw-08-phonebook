import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} from './actions';

// import { fetchContacts, addContact, deleteContact } from './operations';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const loading = createReducer(false, {
  [fetchContactsRequest]: () => false,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => false,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const error = createReducer(null, {
  [fetchContactsError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [fetchContactsRequest]: () => null,
  [addContactRequest]: () => null,
  [deleteContactRequest]: () => null,
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading, error });

// 2-variant
// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],
//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(contact => contact.id !== payload),
// });

// const loading = createReducer(false, {
//   [fetchContacts.pending]: () => false,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => false,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [addContact.rejected]: (_, { payload }) => payload,
//   [deleteContact.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
//   [addContact.pending]: () => null,
//   [deleteContact.pending]: () => null,
// });
