import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '~/models/Product'
import { getProductsApi } from '~/services/products'

interface ProductsState {
  products: Product[]
  isLoading: boolean
  error: string
}

const initialState: ProductsState = {
  products: [],
  isLoading: false,
  error: '',
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetching(state: ProductsState) {
      state.isLoading = true
    },
    fetchSuccess(state: ProductsState, action: PayloadAction<Product[]>) {
      state.isLoading = false
      state.products = action.payload
    },
    fetchError(state: ProductsState, action: PayloadAction<Error>) {
      state.isLoading = false
      state.error = action.payload.message
    },
  },
})

export const getProducts = createAsyncThunk('getProducts', async () => {
  const response = await getProductsApi()
  return response
})

export default productsSlice.reducer
