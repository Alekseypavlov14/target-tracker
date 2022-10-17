import { FC } from 'react'
import { TopicEntity } from '../../types/Topic.entity'
import styles from './TopicLabel.module.scss'

interface TopicLabelProps extends Pick<TopicEntity, 'name'> {}

export const TopicLabel: FC<TopicLabelProps> = ({ name }) => {
  return (
    <div className={styles.TopicLabel}>
      <div className={styles.TopicName}>
        {name}
      </div>
    </div>
  )
}