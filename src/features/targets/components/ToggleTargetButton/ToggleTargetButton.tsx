import { FC } from 'react'
import { TargetEntity } from '../../types/target.entity'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { toggleTargetDone } from '../../slice/targets.slice'
import { useDispatch } from 'react-redux'
import styles from './ToggleTargetButton.module.scss'
import cn from 'classnames'

interface ToggleTargetButtonProps extends Pick<TargetEntity, 'id' | 'done'> {
  big?: boolean
}

export const ToggleTargetButton: FC<ToggleTargetButtonProps> = ({ id, done, big }) => {
  const dispatch = useDispatch()

  const icon = done ? faCircleCheck : faCircleXmark

  const toggleDoneHandler = () => {
    dispatch(toggleTargetDone(id))
  }

  const className = big 
    ? styles.BigToggleTargetButton
    : styles.ToggleTargetButton

  const doneClassName = done 
    ? styles.Done
    : styles.NotDone

  return (
    <div 
      className={cn(className, doneClassName)}
      onClick={toggleDoneHandler}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}