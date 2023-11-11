import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../features/authSlice'
import userReducer from "../features/userSlice"
import transactionReducer from '../features/transactionSlice';

export const store = configureStore({
  reducer: {
    auth: authReducers,
    user: userReducer,
    transaction: transactionReducer
  },
});
