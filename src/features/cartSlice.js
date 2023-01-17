import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      }
      if (!existingItem) {
        state.items = [...state.items, newItem];
      }
    },
    removeFromCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingItem) {
        return;
      }
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
      } else {
        existingItem.quantity -= 1;
      }
    },
    replaceCart: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, replaceCart } = cartSlice.actions;

export default cartSlice.reducer;
