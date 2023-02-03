import { configureStore } from "@reduxjs/toolkit";

import toggleSlice from "./toggle-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { toggle: toggleSlice.reducer, cart: cartSlice.reducer },
});

export const toggleAction = toggleSlice.actions;
export const cartActions = cartSlice.actions;

export default store;
