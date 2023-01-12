import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import cartSlice from '../features/cartSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
});
export default store;
