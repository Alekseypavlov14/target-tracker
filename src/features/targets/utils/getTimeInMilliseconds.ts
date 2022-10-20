type TimeValues = {
  [key: string]: number
}

export function getTimeInMilliseconds(time: string): number {
  const timeValue = time.toUpperCase()

  const timeValues: TimeValues = {
    WEEK: 604_800_000,
    MONTH: 2_592_000_000,
    YEAR: 31_536_000_000, 
  }

  return timeValues[timeValue] || 0
}