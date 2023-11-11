import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../features/authSlice'
import userReducer from "../features/userSlice"

export const store = configureStore({
  reducer: {
    auth: authReducers,
    user: userReducer
  },
});
