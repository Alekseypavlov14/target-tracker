import { configureStore } from '@reduxjs/toolkit'
import { TargetsReducer } from '../features/targets'
import { TopicsReducer } from '../features/topics/slice/topic.slice'

export const store = configureStore({
  reducer: {
    targets: TargetsReducer,
    topics: TopicsReducer
  }
})

export type AppState = ReturnType<typeof store.getState>