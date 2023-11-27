import { PayloadAction, createSlice } from '@reduxjs/toolkit'
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
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      )
      if (itemInCart) {
        itemInCart.count++
      } else {
        state.cart.push({ ...action.payload, count: 1 })
      }
    },
    incrementCount: (state, action: PayloadAction<Product>) => {
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (!item) return
      item.count++
    },
    decrementCount: (state, action: PayloadAction<Product>) => {
      const item = state.cart.find((item) => item.id === action.payload.id)
      if (!item) return
      if (item.count > 1) {
        item.count--
      }
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      )
      state.cart = removeItem
    },
  },
})

export const { addToCart, incrementCount, decrementCount, removeItem } =
  cartSlice.actions

export default cartSlice.reducer
