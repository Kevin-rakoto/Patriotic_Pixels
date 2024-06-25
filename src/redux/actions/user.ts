import { createAction } from "@reduxjs/toolkit";
import { UserAddress, UserData } from "../types/user";
// Define thunk action for loading user
import { Dispatch } from "redux";
import axios, { AxiosResponse } from "axios";
import { server } from "../../utils/server";

// load user action creators
export const loadUserRequest = createAction("LoadUserRequest");
export const loadUserSuccess = createAction<UserData>("LoadUserSuccess");
export const loadUserFailed = createAction<string>("LoadUserFailed");
export const clearErrors = createAction("clearErrors");

// delete user action creators
export const deleteUserAddressRequest = createAction("DeleteUserAddressRequest");
export const deleteUserAddressSuccess = createAction<{ successMessage: string; user: UserData }>("DeleteUserAddressSuccess");
export const deleteUserAddressFailed = createAction<string>("DeleteUserAddressFailed");


// update userAdress action creators
export const updateUserAddressRequest = createAction("UpdateUserAddressRequest");
export const updateUserAddressSuccess = createAction<{ successMessage: string; user: UserData }>("UpdateUserAddressSuccess");
export const updateUserAddressFailed = createAction<string>("UpdateUserAddressFailed");


export const loadUser = () => async (dispatch: Dispatch) => {
  try {
    dispatch(loadUserRequest());

    const response: AxiosResponse<{ user: UserData }> = await axios.get(
      `${server}/user/get-user`,
      { withCredentials: true }
    );

    dispatch(loadUserSuccess(response.data.user));
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || "An unknown error occurred";
    dispatch(loadUserFailed(errorMessage));
  }
};


export const deleteUserAddress = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(deleteUserAddressRequest());

    const response: AxiosResponse<{ user: UserData }> = await axios.delete(
      `${server}/user/delete-user-address/${id}`,
      { withCredentials: true }
    );

    dispatch(deleteUserAddressSuccess({
      successMessage: "User address deleted successfully!",
      user: response.data.user,
    }));
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || "An unknown error occurred";
    dispatch(deleteUserAddressFailed(errorMessage));
  }
};

export const updateUserAddress = (addressData: UserAddress) => async (dispatch: Dispatch) => {
  try {
    dispatch(updateUserAddressRequest());

    const { data } = await axios.put(
      `${server}/user/update-user-addresses`,
      addressData,
      { withCredentials: true }
    );

    dispatch(updateUserAddressSuccess({
      successMessage: "User address updated successfully!",
      user: data.user,
    }));
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || "An unknown error occurred";
    dispatch(updateUserAddressFailed(errorMessage));
  }
};