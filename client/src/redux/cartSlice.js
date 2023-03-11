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
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
