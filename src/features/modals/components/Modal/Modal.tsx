import { FC, ReactNode } from 'react'
import { BackgroundLayer } from '../BackgroundLayer/BackgroundLayer'
import styles from './Modal.module.scss'

interface ModalProps {
  title: string,
  children?: ReactNode,
  close: () => void
}

export const Modal: FC<ModalProps> = ({ 
  title,
  children, 
  close 
}) => {
  return (
    <BackgroundLayer onClick={close}>
      <div className={styles.Modal}>
        <div className={styles.Title}>
          {title}
        </div>

        {children}
      </div>
    </BackgroundLayer>
  )
}