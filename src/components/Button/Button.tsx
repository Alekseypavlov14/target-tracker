import { FC, MouseEvent } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  children: string,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick
}) => {
  return (
    <button 
      className={styles.Button}
      onClick={onClick}
      children={children}
    />
  )
}