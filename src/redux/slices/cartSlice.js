/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;

      isItemExistInCart = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );

      if (isItemExistInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.id ? newItem : item
        );
      } else {
        state.cartItems = [...state.cartItems, newItem];
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

const cartActions = cartSlice.actions
const cartReducer = cartSlice.reducer

export {cartActions, cartReducer}


