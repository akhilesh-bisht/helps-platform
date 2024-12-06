import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Will hold user data after signup
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload; // Store user data after successful signup
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload; // User data after login success
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    logoutSuccess: (state) => {
      state.user = null; // Clear user data on logout
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  logoutSuccess,
} = authSlice.actions;

export default authSlice.reducer;
