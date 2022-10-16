import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../../../store/store'
import { getDataFromLocalStorage } from '../../../utils/getDataFromLocalStorage'
import { TargetEntity } from './../types/target.entity'
import { TargetActions } from './target.actions'

interface InitialState {
  targets: TargetEntity[]
}

const initialState: InitialState = {
  targets: getDataFromLocalStorage('targets')
}

const TargetsSlice = createSlice({
  name: 'targets',
  initialState,
  reducers: {
    create(state, action: PayloadAction<TargetActions.Create>) {},
    update(state, action: PayloadAction<TargetActions.Create>) {},
    delete(state, action: PayloadAction<number>) {},
  }
})

export const TargetsReducer = TargetsSlice.reducer
export const TargetsSelector = (state: AppState) => state.targets.targets