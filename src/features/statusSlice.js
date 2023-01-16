/* eslint-disable object-curly-newline */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const putRequestStatus = createAsyncThunk(
  'status/putRequestStatus',
  async (cart) => {
    const response = await axios.put(API_URL, cart);
    return response.data;
  },
);

export const getRequestStatus = createAsyncThunk(
  'status/getRequestStatus',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
);

const statusSlice = createSlice({
  name: 'status',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(putRequestStatus.pending, (state) => {
        state.putStatus = statusEnum.pending;
      })
      .addCase(putRequestStatus.fulfilled, (state) => {
        state.putStatus = statusEnum.fulfilled;
      })
      .addCase(putRequestStatus.rejected, (state) => {
        state.putStatus = statusEnum.rejected;
      })
      .addCase(getRequestStatus.pending, (state) => {
        state.getStatus = statusEnum.pending;
      })
      .addCase(getRequestStatus.fulfilled, (state) => {
        state.getStatus = statusEnum.fulfilled;
      })
      .addCase(getRequestStatus.rejected, (state) => {
        state.getStatus = statusEnum.rejected;
      });
  },
});

export default statusSlice.reducer;
