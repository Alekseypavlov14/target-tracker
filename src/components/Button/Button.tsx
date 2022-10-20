import { FC, MouseEvent } from 'react'
import styles from './Button.module.scss'
import cn from 'classnames'

interface ButtonProps {
  children: string,
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  dangerous?: boolean
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  dangerous
}) => {
  return (
    <button 
      className={cn(styles.Button, dangerous && styles.Dangerous)}
      onClick={onClick}
      children={children}
    />
  )
}