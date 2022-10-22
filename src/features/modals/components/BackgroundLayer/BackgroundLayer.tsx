import { FC, ReactNode } from 'react'
import styles from './BackgroundLayer.module.scss'

interface BackgroundLayerProps {
  onClick: () => void,
  children: ReactNode
}

export const BackgroundLayer: FC<BackgroundLayerProps> = ({
  onClick, 
  children 
}) => {
  return (
    <div 
      className={styles.BackgroundLayer}
      onClick={onClick}
    >
      {children}
    </div>
  )
}