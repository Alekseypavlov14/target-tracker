import { TargetEntity } from "../types/target.entity"

export namespace TargetActions {
  export type Create = Omit<TargetEntity, 'id'>

  export interface Update {
    id: number
    updatedTarget: Partial<Create>
  }
}