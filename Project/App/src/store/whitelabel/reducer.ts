import { createReducer } from '@reduxjs/toolkit'

import type { WhitelabelResources } from 'models/whitelabel'

import { getWhitelabel, clearWhitelabel } from './actions'

type WhitelabelState = {
  loading: boolean
  data?: WhitelabelResources
  error?: string
}

const initialWhitelabel = {
  loading: false,
  data: undefined,
  error: undefined
}

export default createReducer<WhitelabelState>(initialWhitelabel, builder =>
  builder
    .addCase(getWhitelabel.pending, state => {
      state.loading = true
      state.data = undefined
      state.error = undefined
    })
    .addCase(getWhitelabel.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
      state.error = undefined
    })
    .addCase(getWhitelabel.rejected, (state, action) => {
      state.loading = false
      state.data = undefined
      state.error = action.payload?.message
    })
    .addCase(clearWhitelabel, _ => initialWhitelabel)
)
