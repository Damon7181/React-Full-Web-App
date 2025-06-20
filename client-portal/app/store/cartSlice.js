"use client";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.cartCount += 1;
    },
    removeFromCart: (state) => {
      if (state.cartCount > 0) {
        state.cartCount -= 1;
      }
    },
    clearCart: (state) => {
      state.cartCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
