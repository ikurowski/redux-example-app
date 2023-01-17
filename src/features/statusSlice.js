/* eslint-disable object-curly-newline */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { replaceCart } from './cartSlice';

export const statusEnum = {
  rejected: 0,
  fulfilled: 1,
  pending: 2,
};

const initialState = {
  putStatus: null,
  getStatus: null,
};

const API_URL =
  'https://meal-app-eee91-default-rtdb.europe-west1.firebasedatabase.app/orders-redux-app.json';

export const putRequest = createAsyncThunk(
  'status/putRequest',
  async (cart) => {
    const response = await axios.put(API_URL, cart);
    return response.data;
  },
);

export const getRequest = createAsyncThunk('status/getRequest', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

const statusSlice = createSlice({
  name: 'status',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(putRequest.pending, (state) => {
        state.putStatus = statusEnum.pending;
      })
      .addCase(putRequest.fulfilled, (state) => {
        state.putStatus = statusEnum.fulfilled;
      })
      .addCase(putRequest.rejected, (state) => {
        state.putStatus = statusEnum.rejected;
      })
      .addCase(getRequest.pending, (state) => {
        state.getStatus = statusEnum.pending;
      })
      .addCase(getRequest.fulfilled, (state, action) => {
        state.getStatus = statusEnum.fulfilled;
        replaceCart(action.payload);
        console.log(action.payload);
      })
      .addCase(getRequest.rejected, (state) => {
        state.getStatus = statusEnum.rejected;
      });
  },
});

export default statusSlice.reducer;
