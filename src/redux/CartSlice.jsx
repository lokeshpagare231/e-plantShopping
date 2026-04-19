import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      if (!state.items[product.id]) {
        state.items[product.id] = { ...product, quantity: 1 };
        state.totalQuantity += 1;
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload;
      const entry = state.items[id];
      if (entry) {
        entry.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload;
      const entry = state.items[id];
      if (entry) {
        if (entry.quantity > 1) {
          entry.quantity -= 1;
          state.totalQuantity -= 1;
        } else {
          state.totalQuantity -= entry.quantity;
          delete state.items[id];
        }
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const entry = state.items[id];
      if (entry) {
        state.totalQuantity -= entry.quantity;
        delete state.items[id];
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state) => Object.values(state.cart?.items ?? {});
export const selectCartCount = (state) => state.cart?.totalQuantity ?? 0;
export const selectCartTotal = (state) =>
  selectCartItems(state).reduce((sum, item) => sum + item.price * item.quantity, 0);

export default cartSlice.reducer;
