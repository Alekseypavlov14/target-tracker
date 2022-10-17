import { FC } from 'react'
import styles from './Title.module.scss'

interface TitleProps {}

export const Title: FC<TitleProps> = () => {
  return (
    <div className={styles.Title}>
      <span>Target</span> Tracker
    </div>
  )
}