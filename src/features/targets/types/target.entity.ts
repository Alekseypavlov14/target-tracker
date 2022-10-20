import { PeriodEntity } from "./period.entity"

export interface TargetEntity {
  id: number
  name: string
  description: string
  period: PeriodEntity
  done: boolean
  topicId: number
}