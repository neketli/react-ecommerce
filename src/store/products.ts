import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Product } from '~/models/Product'
import { Pagination, ProductsServerResponse } from '~/models/ServerResponse'
import {
  formatProductsServerResponse,
  getProductsApi,
} from '~/services/products'

interface ProductsState {
  list: Product[]
  pagination: Pagination
}

const initialState: ProductsState = {
  list: [],
  pagination: {
    page: 0,
    pageSize: 0,
    pageCount: 0,
    total: 0,
  },
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = formatProductsServerResponse(action.payload.data)
      state.pagination = action.payload.meta.pagination
    })
  },
})

export const getProducts = createAsyncThunk(
  'getProducts',
  async (
    params: {
      searchQuery?: string
      categories?: string[]
      page?: number
    } = {}
  ): Promise<ProductsServerResponse> => {
    const { data } = await getProductsApi(params)
    return data
  }
)

export default productsSlice.reducer
