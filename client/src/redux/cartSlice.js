import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    subTotal: 0,
    taxes: 8,
    cartTotal: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem) {
        cartItem.quantity++;
      } else state.cartItems.push(action.payload);

      state.subTotal += action.payload.productPrice;
      state.cartTotal =
        action.subTotal + (action.subTotal * action.taxes) / 100;
    },
    removeProduct: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (cartItem) {
        cartItem.quantity--;
        if (cartItem.quantity <= 0) state.cartItems.pop(action.payload);
      } else state.cartItems.pop(action.payload);

      state.subTotal -= action.payload.productPrice;
      state.cartTotal =
        action.subTotal + (action.subTotal * action.taxes) / 100;
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
