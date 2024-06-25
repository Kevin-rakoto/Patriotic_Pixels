// actions/cart.ts
import { createAction } from "@reduxjs/toolkit";
import { CartItem } from "../types/cart";
import { Dispatch } from "redux";
import { RootState } from "../store";

export const addToCart = createAction<CartItem>("addToCart");
export const removeFromCart = createAction<string>("removeFromCart");


export const addToCartThunk = (item: CartItem) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(addToCart(item));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
  return item;
};

export const removeFromCartThunk = (itemId: string) => async (dispatch: Dispatch, getState: () => RootState) => {
  dispatch(removeFromCart(itemId));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));
  return itemId;
};