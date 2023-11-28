import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../features/authSlice'
import userReducer from "../features/userSlice"
import transactionReducer from '../features/transactionSlice';
import categorySlice from '../features/categorySlice';
import destinationReducer from '../features/destinationSlice';
import profileReducer from '../features/profileSlice';

export const store = configureStore({
  reducer: {
    auth: authReducers,
    user: userReducer,
    transaction: transactionReducer,
    category: categorySlice,
    dest: destinationReducer,
    profile: profileReducer
  },
});
