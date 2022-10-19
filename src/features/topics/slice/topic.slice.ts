import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppState } from "../../../store/store"
import { LocalStorage } from './../../../utils/LocalStorage.util'
import { TopicEntity } from './../types/Topic.entity'
import { TopicActions } from "./topic.actions"

interface InitialState {
  topics: TopicEntity[]
}

const initialState: InitialState = {
  topics: LocalStorage.get('topics')
}

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    create(state, action: PayloadAction<TopicActions.Create>) {
      const newTopicData = action.payload

      const topicIds = state.topics.map(topic => topic.id)
      const newTopicId = Math.max(...topicIds, 0) + 1 // to do it unique and at least 1
      const newTopic: TopicEntity = { id: newTopicId, ...newTopicData}

      state.topics.push(newTopic)
      LocalStorage.save('topics', state.topics)
    },
    remove(state, action) {
      const id = action.payload
      const newTopics = state.topics.filter(topic => topic.id !== id)

      state.topics = newTopics
      LocalStorage.save('topics', state.topics)
    }
  }
})

export const topicsReducer = topicsSlice.reducer
export const { create, remove } = topicsSlice.actions
export const topicsSelector = (state: AppState) => state.topics.topics