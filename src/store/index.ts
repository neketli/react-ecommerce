import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productsReducer from './products'
import categoriesReducer from './categories'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>
