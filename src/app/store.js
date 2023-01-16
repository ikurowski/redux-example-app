import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/authSlice';
import cartSlice from '../features/cartSlice';
import statusSlice from '../features/statusSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
    status: statusSlice,
  },
});
export default store;
