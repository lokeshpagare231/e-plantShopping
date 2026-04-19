import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload
      if (!state.items[item.id]) {
        state.items[item.id] = { ...item, quantity: 1 }
      }
    },
    incrementQuantity: (state, action) => {
      const id = action.payload
      if (state.items[id]) {
        state.items[id].quantity += 1
      }
    },
    decrementQuantity: (state, action) => {
      const id = action.payload
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity -= 1
      }
    },
    removeItem: (state, action) => {
      delete state.items[action.payload]
    },
    clearCart: (state) => {
      state.items = {}
    },
  },
})

export const { addItem, incrementQuantity, decrementQuantity, removeItem, clearCart } =
  cartSlice.actions

export const selectCartItems = (state) => Object.values(state.cart.items)
export const selectCartCount = (state) =>
  Object.values(state.cart.items).reduce((total, item) => total + item.quantity, 0)
export const selectCartTotal = (state) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  )

export default cartSlice.reducer
