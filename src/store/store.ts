import { configureStore } from '@reduxjs/toolkit'
import { targetsReducer } from '../features/targets/slice/targets.slice'
import { topicsReducer } from '../features/topics/slice/topic.slice'

export const store = configureStore({
  reducer: {
    targets: targetsReducer,
    topics: topicsReducer
  }
})

export type AppState = ReturnType<typeof store.getState>