import { FC } from 'react'
import { TargetEntity } from '../../types/target.entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as StrokedStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as FilledStar } from '@fortawesome/free-solid-svg-icons'
import { toggleTargetDone } from '../../slice/targets.slice'
import { useDispatch } from 'react-redux'
import styles from './ToggleTargetButton.module.scss'

interface ToggleTargetButtonProps extends Pick<TargetEntity, 'id' | 'done'> {}

export const ToggleTargetButton: FC<ToggleTargetButtonProps> = ({ id, done }) => {
  const dispatch = useDispatch()

  const icon = done ? FilledStar : StrokedStar

  const toggleDoneHandler = () => {
    dispatch(toggleTargetDone(id))
  }

  return (
    <div 
      className={styles.ToggleTargetButton}
      onClick={toggleDoneHandler}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}