import { FC } from 'react'
import { TargetEntity } from '../../types/target.entity'
import { useNavigate } from 'react-router'
import { ToggleTargetButton } from '../ToggleTargetButton/ToggleTargetButton'
import styles from './TargetLabel.module.scss'

interface TargetLabelProps extends Pick<TargetEntity, 'name' | 'done' | 'id'> {}

export const TargetLabel: FC<TargetLabelProps> = ({ name, done, id }) => {
  const navigate = useNavigate()

  const openDetailsPage = (id: number) => {
    return () => navigate(`/target/${id}`)
  }

  return (
    <div className={styles.TargetLabel}>
      <div 
        className={styles.TargetName}
        onClick={openDetailsPage(id)}
      >
        {name}
      </div>

      <ToggleTargetButton id={id} done={done} />
    </div>
  )
}