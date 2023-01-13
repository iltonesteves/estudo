/* istanbul ignore file */
import { useDispatch } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

export const store = configureStore({
  reducer: rootReducer
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export type AppDispatch = typeof store.dispatch
