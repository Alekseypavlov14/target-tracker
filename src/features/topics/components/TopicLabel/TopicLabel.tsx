import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { TopicEntity } from '../../types/Topic.entity'
import styles from './TopicLabel.module.scss'

interface TopicLabelProps extends TopicEntity {}

export const TopicLabel: FC<TopicLabelProps> = ({ name, id }) => {
  const navigate = useNavigate()
  
  const navigateToTopic = () => {
    navigate(`/topic/${id}`)
  }

  return (
    <div 
      className={styles.TopicLabel}
      onClick={navigateToTopic}
    >
      <div className={styles.TopicName}>
        {name}
      </div>
    </div>
  )
}