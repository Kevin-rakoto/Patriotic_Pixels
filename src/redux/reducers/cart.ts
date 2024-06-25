// reducers/cart.ts
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { addToCart, removeFromCart } from "../actions/cart";
import { CartState, CartItem } from "../types/cart";

const initialState: CartState = {
  items: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems")!)
    : [],
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToCart, (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const isItemExist = state.items.find((i) => i.id === item.id);
      if (isItemExist) {
        state.items = state.items.map((i) => (i.id === isItemExist.id ? item : i));
      } else {
        state.items.push(item);
      }
    })
    .addCase(removeFromCart, (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    });
});

export default cartReducer;