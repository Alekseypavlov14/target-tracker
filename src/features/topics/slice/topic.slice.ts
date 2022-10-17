import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../../../store/store"
import { LocalStorage } from './../index'
import { TopicEntity } from './../types/Topic.entity'

interface InitialState {
  topics: TopicEntity[]
}

const initialState: InitialState = {
  topics: LocalStorage.get('topics')
}

const TopicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {}
})

export const TopicsReducer = TopicsSlice.reducer
export const TopicsSelector = (state: AppState) => state.topics.topics