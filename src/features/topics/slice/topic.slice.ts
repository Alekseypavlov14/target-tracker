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

const TopicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    create(state, action: PayloadAction<TopicActions.Create>) {
      const newTopicData = action.payload

      const topicIds = state.topics.map(topic => topic.id)
      const newTopicId = Math.max(...topicIds) + 1 // to do it unique
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

export const TopicsReducer = TopicsSlice.reducer
export const { create, remove } = TopicsSlice.actions
export const TopicsSelector = (state: AppState) => state.topics.topics