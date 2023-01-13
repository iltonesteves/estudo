import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import type { ThunkApi } from 'models/store'
import { WhitelabelResources } from 'models/whitelabel'
import whitelabelResources from 'services/whitelabel'

export const clearWhitelabel = createAction('whitelabel/clear-whitelabel')

export const getWhitelabel = createAsyncThunk<WhitelabelResources, void, ThunkApi>(
  'whitelabel/get-whitelabel',
  async (_, thunkApi) => {
    // Aqui é onde acontecerá o Request e por isso tem um TRY/CATCH
    try {
      if (whitelabelResources) {
        return whitelabelResources
      }

      throw new Error()
    } catch (error) {
      return thunkApi.rejectWithValue({ message: 'erro de request' })
    }
  }
)
