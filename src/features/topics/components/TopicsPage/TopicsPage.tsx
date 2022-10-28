import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Container } from './../../../../components/Container/Container'
import { topicsSelector } from '../../slice/topic.slice'
import { TopicLabel } from '../TopicLabel/TopicLabel'
import styles from './TopicsPage.module.scss'
import { AddTopicButton } from '../AddTopicButton/AddTopicButton'

interface TopicsPageProps {}

export const TopicsPage: FC<TopicsPageProps> = () => {
  const topics = useSelector(topicsSelector)

  return (
    <div className={styles.TopicsPage}>
      <Container>
        <div className={styles.Topics}>
          {topics.map(topic => (
            <div 
              key={topic.id} 
              className={styles.TopicLabelContainer}
            >
              <TopicLabel
                name={topic.name} 
                id={topic.id} 
              />
            </div>
          ))}
        </div>

        <AddTopicButton />
      </Container>
    </div>
  )
}