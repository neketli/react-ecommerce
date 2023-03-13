import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Category } from '~/models/Category'
import {
  CategoriesServerResponse,
  ServerCategoryData,
} from '~/models/ServerResponse'
import { getCategoriesApi } from '~/services/categories'

interface CategoriesState {
  list: Category[]
}

const initialState: CategoriesState = {
  list: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.list = action.payload.data.map((item: ServerCategoryData) => ({
        id: item.id,
        ...item.attributes,
      }))
    })
  },
})

export const getCategories = createAsyncThunk(
  'getCategories',
  async (): Promise<CategoriesServerResponse> => {
    const { data } = await getCategoriesApi()
    return data
  }
)

export default categoriesSlice.reducer
