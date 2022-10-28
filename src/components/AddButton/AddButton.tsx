import { FC } from 'react'
import styles from './AddButton.module.scss'

interface AddButtonProps {
  onClick: () => void
}

export const AddButton: FC<AddButtonProps> = ({ onClick }) => {
  return (
    <div 
      className={styles.AddButton}
      onClick={onClick}
      children='+'
    />
  )
}