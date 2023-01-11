import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticated: false,
};

const authSlice = createSlice({
  initialState,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

export default authSlice.reducer;
