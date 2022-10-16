export enum PeriodLength {
  Week = 'WEEK',
  Month = 'MONTH',
  Year = 'YEAR'
}

export interface PeriodEntity {
  start: number
  end: number
  length: PeriodLength
}