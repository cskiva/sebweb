import combinedReducer from './index'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: { combinedReducer },
})
