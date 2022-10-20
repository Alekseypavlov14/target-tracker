import { FC } from 'react'
import { TargetEntity } from '../../types/target.entity'
import { useNavigate } from 'react-router'
import { ToggleTargetButton } from '../ToggleTargetButton/ToggleTargetButton'
import styles from './TargetLabel.module.scss'
import cn from 'classnames'

interface TargetLabelProps extends Pick<TargetEntity, 'name' | 'done' | 'id'> {}

export const TargetLabel: FC<TargetLabelProps> = ({ name, done, id }) => {
  const navigate = useNavigate()

  const openDetailsPage = (id: number) => {
    return () => navigate(`/target/${id}`)
  }

  const doneClassName = done 
    ? styles.Done
    : styles.NotDone

  return (
    <div className={cn(styles.TargetLabel, doneClassName)}>
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