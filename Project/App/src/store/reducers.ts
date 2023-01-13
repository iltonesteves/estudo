import { combineReducers } from '@reduxjs/toolkit'

import whitelabelReducer from './whitelabel'

const rootReducer = combineReducers({
  whitelabel: whitelabelReducer
})

export default rootReducer
export type RootReducerType = typeof rootReducer
