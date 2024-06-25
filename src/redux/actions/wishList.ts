// actions/wishlist.ts
import { createAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { WishlistItem } from "../types/wishList";

export const addToWishlist = createAction<WishlistItem>("addToWishlist");
export const removeFromWishlist = createAction<string>("removeFromWishlist");

export const addToWishlistThunk =
  (item: WishlistItem): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch, getState) => {
    dispatch(addToWishlist(item));
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(getState().wishlist.wishlist)
    );
  };

export const removeFromWishlistThunk =
  (id: string): ThunkAction<void, RootState, unknown, any> =>
  async (dispatch, getState) => {
    dispatch(removeFromWishlist(id));
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify(getState().wishlist.wishlist)
    );
  };
