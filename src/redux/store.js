import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './Auth/authSlise';
import { contactsReducer } from './contactsSlise';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
