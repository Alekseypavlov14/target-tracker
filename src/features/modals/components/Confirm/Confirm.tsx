import { FC } from 'react'
import { Button } from '../../../../components/Button/Button'
import { Modal } from '../Modal/Modal'
import styles from './Confirm.module.scss'

interface ConfirmProps {
  children: string,
  onConfirm: () => void,
  onCancel?: () => void,
  close: () => void
}

export const Confirm: FC<ConfirmProps> = ({
  children,
  onConfirm,
  onCancel,
  close
}) => {
  const confirmHandler = () => {
    onConfirm()
    close()
  }

  const cancelHandler = () => {
    if (onCancel) onCancel()
    close()
  }

  return (
    <Modal 
      title={children}
      close={close}
    >
      <div className={styles.Buttons}>
        <Button onClick={cancelHandler} dangerous>Cancel</Button>
        <Button onClick={confirmHandler}>Confirm</Button>
      </div>
    </Modal>
  )
}