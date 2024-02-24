import { createSlice } from '@reduxjs/toolkit';

import { signup, login, current, logout } from './auth-operartion';

const initialState = {
  user: {},
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.pending, state => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(signup.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(current.pending, state => {
        state.loading = true;
      })
      .addCase(current.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload;
        state.isLogin = true;
        state.error = null;
      })
      .addCase(current.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
      })
      .addCase(logout.pending, state => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = {};
        state.token = '';
        state.isLogin = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, { payload }) => {
        state.loading = false;
        state.token = '';
      });
  },
});

export default authSlice.reducer;
