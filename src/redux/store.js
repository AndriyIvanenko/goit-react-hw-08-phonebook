import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlise';
import { contactsReducer } from './Contacts/contactsSlise';
import { filterReducer } from './Contacts/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
