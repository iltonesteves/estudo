import type { RootReducerType } from 'store/reducers'

type RejectedValue = {
  networkError?: boolean
  message: string
  messageLink?: string
}

export type ThunkApi = {
  state: RootState
  rejectValue: RejectedValue
  requestId: string
}

export interface RootState extends ReturnType<RootReducerType> {}
