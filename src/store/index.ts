import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productsReducer from './products'

const rootReducer = combineReducers({
  products: productsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>
