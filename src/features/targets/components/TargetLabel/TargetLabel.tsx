import { FC } from 'react'
import { TargetEntity } from '../../types/target.entity'
import styles from './TargetLabel.module.scss'

interface TargetLabelProps extends Pick<TargetEntity, 'name'> {}

export const TargetLabel: FC<TargetLabelProps> = ({ name }) => {
  return (
    <div className={styles.TargetLabel}>
      {name}
    </div>
  )
}