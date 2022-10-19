import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../../../store/store'
import { LocalStorage } from './../../../utils/LocalStorage.util'
import { TargetEntity } from './../types/target.entity'
import { TargetActions } from './target.actions'

interface InitialState {
  targets: TargetEntity[]
}

const initialState: InitialState = {
  targets: LocalStorage.get('targets')
}

const targetsSlice = createSlice({
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
    remove(state, action: PayloadAction<number>) {
      const id: number = action.payload

      const newTargets = state.targets.filter(target => target.id !== id)

      state.targets = newTargets
      LocalStorage.save('targets', state.targets)
    },
  }
})

export const targetsReducer = targetsSlice.reducer
export const { create, update, remove } = targetsSlice.actions
export const targetsSelector = (state: AppState) => state.targets.targets