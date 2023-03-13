import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Product } from '~/models/Product'
import {
  ProductsServerResponse,
  ServerCategoryData,
  ServerProductData,
} from '~/models/ServerResponse'
import { getProductsApi } from '~/services/products'

interface ProductsState {
  list: Product[]
}

const initialState: ProductsState = {
  list: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.list = action.payload.data.map((item: ServerProductData) => ({
        id: item.id,
        ...item?.attributes,
        image:
          import.meta.env.VITE_BASE_URL +
          item?.attributes.image.data.attributes.url,
        categories: item?.attributes.categories.data.map(
          (item: ServerCategoryData) => ({
            ...item?.attributes,
          })
        ),
      }))
    })
  },
})

export const getProducts = createAsyncThunk(
  'getProducts',
  async (
    params: { searchQuery?: string; categories?: string[] } = {}
  ): Promise<ProductsServerResponse> => {
    const { data } = await getProductsApi(params)
    return data
  }
)

export default productsSlice.reducer
