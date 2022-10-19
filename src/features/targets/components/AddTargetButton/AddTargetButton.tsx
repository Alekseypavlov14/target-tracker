import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './AddTargetButton.module.scss'

interface AddTargetButtonProps {}

export const AddTargetButton: FC<AddTargetButtonProps> = () => {
  const navigate = useNavigate()

  const openAddTargetPage = () => {
    navigate('add')
  }

  return (
    <div 
      className={styles.AddTargetButton}
      onClick={openAddTargetPage}
      children='+'
    />
  )
}