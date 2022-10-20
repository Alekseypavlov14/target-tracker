import { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as StrokedStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as FilledStar } from '@fortawesome/free-solid-svg-icons'
import { TargetEntity } from '../../types/target.entity'
import { useDispatch } from 'react-redux'
import { toggleTargetDone } from '../../slice/targets.slice'
import styles from './TargetLabel.module.scss'

interface TargetLabelProps extends Pick<TargetEntity, 'name' | 'done' | 'id'> {}

export const TargetLabel: FC<TargetLabelProps> = ({ name, done, id }) => {
  const [isDone, setDone] = useState<boolean>(done)
  const dispatch = useDispatch()

  const icon = isDone ? FilledStar : StrokedStar

  const toggleDoneHandler = () => {
    setDone(value => !value)
    dispatch(toggleTargetDone(id))
  }

  return (
    <div className={styles.TargetLabel}>
      <div className={styles.TargetName}>
        {name}
      </div>

      <div 
        className={styles.DoneButton}
        onClick={toggleDoneHandler}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  )
}