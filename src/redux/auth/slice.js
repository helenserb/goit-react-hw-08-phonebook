import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { register, logIn, logOut, fetchCurrentUser } from './auth-operations';

const authInitialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};


const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  // extraReducers:
  //   builder =>
  //   builder
  //     .addCase(register.pending, () => {})
  //     .addCase(register.rejected, () => {})
  //     .addCase(register.fulfilled, (state, { payload }) => {
  //       state.user.name = payload.user.name;
  //       state.user.email = payload.user.email;
  //       state.token = payload.token;
  //       state.isLoggedIn = true;
  //     })
  //     .addCase(logIn.pending, () => {})
  //     .addCase(logIn.rejected, () => {})
  //     .addCase(logIn.fulfilled, (state, { payload }) => {
  //       state.user.name = payload.user.name;
  //       state.user.email = payload.user.email;
  //       state.token = payload.token;
  //       state.isLoggedIn = true;
  //     })
  //     .addCase(logOut.pending, (state, action) => state)
  //     .addCase(logOut.rejected, (state, action) => state)
  //     .addCase(logOut.fulfilled, () => authInitialState)

  //     .addCase(
  //       fetchCurrentUser.pending,
  //       (state) => (state.isFetchingCurrentUser = true)
  //     )
  //     .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
  //       state.user.name = payload.name;
  //       state.user.email = payload.email;
  //       state.isLoggedIn = true;
  //       state.isFetchingCurrentUser = false;
  //     })
  //     .addCase(
  //       fetchCurrentUser.rejected,
  //       (state) => { state.isFetchingCurrentUser = false }
  //     )
      
  extraReducers: {
    [register.pending]() {},
    [register.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]() {},

    [logIn.pending]() {},
    [logIn.fulfilled](state, { payload }) {
      state.user.name = payload.user.name;
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]() {},

    [logOut.pending]() {},
    [logOut.fulfilled]() {
      return authInitialState;
    },
    [logOut.rejected]() {},

    [fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, { payload }) {
      state.user.name = payload.name;
      state.user.email = payload.email;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});


export const authPersistedReducer = persistReducer(
  persistConfig,
  authSlice.reducer
);
