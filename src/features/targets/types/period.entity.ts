export enum PeriodLength {
  Week = 'Week',
  Month = 'Month',
  Year = 'Year'
}

export interface PeriodEntity {
  start: number
  end: number
  length: PeriodLength
}