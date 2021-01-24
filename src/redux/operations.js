import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';
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
} from '../redux/actions';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)));
};

// 2-variant
// export const addContact = createAsyncThunk(
//   'contacts/addContacts',
//   async ({ name, number }, { rejectWithValue }) => {
//     const contact = {
//       name,
//       number,
//     };

//     try {
//       const { data } = await axios.post('/contacts', contact);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContacts',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       await axios.delete(`/contacts/${contactId}`);
//       return contactId;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
