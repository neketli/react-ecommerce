import { createSlice } from '@reduxjs/toolkit'
import { Product } from '~/models/Product'

export type CartProduct = Product & { count: number }

export interface CartState {
  cart: CartProduct[]
}

const initialState: CartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.count++
      } else {
        state.cart.push({ ...action.payload, count: 1 })
      }
    },
    incrementCount: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (!item) return
      item.count++
    },
    decrementCount: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload)
      if (!item) return
      if (item.count > 1) {
        item.count--
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload)
      state.cart = removeItem
    },
  },
})

export const { addToCart, incrementCount, decrementCount, removeItem } =
  cartSlice.actions

export default cartSlice.reducer
