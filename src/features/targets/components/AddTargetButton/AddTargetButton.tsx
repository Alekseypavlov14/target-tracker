import { FC } from 'react'
import styles from './AddTargetButton.module.scss'

interface AddTargetButtonProps {}

export const AddTargetButton: FC<AddTargetButtonProps> = () => {
  return (
    <div className={styles.AddTargetButton}>
      +
    </div>
  )
}