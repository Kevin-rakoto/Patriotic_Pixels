import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import {
  loadUserRequest,
  loadUserSuccess,
  loadUserFailed,
  clearErrors,
  updateUserAddressRequest,
  updateUserAddressSuccess,
  updateUserAddressFailed,
  deleteUserAddressRequest,
  deleteUserAddressSuccess,
  deleteUserAddressFailed,
} from "../actions/user";
import { UserData, UserState } from "../types/user";

const initialState: UserState = {
  isAuthenticated: false,
  loading: false,
  error: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadUserRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loadUserSuccess, (state, action: PayloadAction<UserData>) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    })
    .addCase(loadUserFailed, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase(clearErrors, (state) => {
      state.error = null;
    })    .addCase(updateUserAddressRequest, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(deleteUserAddressRequest, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteUserAddressSuccess, (state, action: PayloadAction<{ successMessage: string; user: UserData }>) => {
      state.loading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase(deleteUserAddressFailed, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(updateUserAddressSuccess, (state, action: PayloadAction<{ successMessage: string; user: UserData }>) => {
      state.loading = false;
      state.successMessage = action.payload.successMessage;
      state.user = action.payload.user;
    })
    .addCase(updateUserAddressFailed, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    });;
});

export default userReducer;
