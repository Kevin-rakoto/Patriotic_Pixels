// reducers/wishlist.ts
import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { WishlistItem, WishlistState } from "../types/wishList";
import { addToWishlist, removeFromWishlist } from "../actions/wishList";

const initialState: WishlistState = {
  wishlist: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems")!)
    : [],
};

export const wishlistReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToWishlist, (state, action: PayloadAction<WishlistItem>) => {
      const item = action.payload;
      const isItemExist = state.wishlist.find((i) => i.id === item.id);
      if (isItemExist) {
        state.wishlist = state.wishlist.map((i) =>
          i.id === isItemExist.id ? item : i
        );
      } else {
        state.wishlist.push(item);
      }
    })
    .addCase(removeFromWishlist, (state, action: PayloadAction<string>) => {
      state.wishlist = state.wishlist.filter((i) => i.id !== action.payload);
    });
});
