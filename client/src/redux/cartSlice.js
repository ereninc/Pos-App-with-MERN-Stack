import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem) {
        cartItem.quantity++;
      } else state.cartItems.push(action.payload);
    },
    removeProduct: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity <= 0) state.cartItems.pop(action.payload);
      } else state.cartItems.pop(action.payload);
    },
    deleteCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { addProduct, removeProduct, deleteCartItem } = cartSlice.actions;
export default cartSlice.reducer;
