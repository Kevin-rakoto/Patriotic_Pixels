import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user";
import cartReducer from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishList";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;