import { configureStore } from '@reduxjs/toolkit'
import { TargetsReducer } from '../features/targets'

export const store = configureStore({
  reducer: {
    targets: TargetsReducer
  }
})

export type AppState = ReturnType<typeof store.getState>