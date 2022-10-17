import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../../../store/store'
import { LocalStorage } from './../index'
import { TargetEntity } from './../types/target.entity'
import { TargetActions } from './target.actions'

interface InitialState {
  targets: TargetEntity[]
}

const initialState: InitialState = {
  targets: LocalStorage.get('targets')
}

const TargetsSlice = createSlice({
  name: 'targets',
  initialState,
  reducers: {
    create(state, action: PayloadAction<TargetActions.Create>) {
      const newTargetData = action.payload

      const targetIds: number[] = state.targets.map(target => target.id)
      const newTargetId = Math.max(...targetIds) + 1 // to do it unique
      const newTarget: TargetEntity = { ...newTargetData, id: newTargetId }

      state.targets.push(newTarget)
      LocalStorage.save('targets', state.targets)
    },
    update(state, action: PayloadAction<TargetActions.Update>) {},
    delete(state, action: PayloadAction<number>) {
      const id: number = action.payload

      const newTargetsArray = state.targets.filter(target => target.id !== id)

      state.targets = newTargetsArray
      LocalStorage.save('targets', state.targets)
    },
  }
})

export const TargetsReducer = TargetsSlice.reducer
export const TargetsSelector = (state: AppState) => state.targets.targets