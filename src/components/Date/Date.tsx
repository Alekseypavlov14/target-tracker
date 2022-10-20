import { FC } from 'react'
import { formatDate } from '../../features/targets/utils/formatDate'
import styles from './Date.module.scss'

interface DateProps {
  time: number
}

export const Date: FC<DateProps> = ({ time }) => {
  const timeData = formatDate(time)

  const timeView = `${timeData.day}.${timeData.month}.${timeData.year}`

  return (
    <span className={styles.Date}>
      {timeView}
    </span>
  )
}