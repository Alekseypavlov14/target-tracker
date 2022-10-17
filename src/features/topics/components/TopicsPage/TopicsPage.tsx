import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Container } from './../../../../components/Container/Container'
import { TopicsSelector } from '../../slice/topic.slice'
import { TopicLabel } from '../TopicLabel/TopicLabel'
import styles from './TopicsPage.module.scss'

interface TopicsPageProps {}

export const TopicsPage: FC<TopicsPageProps> = () => {
  const topics = useSelector(TopicsSelector)

  return (
    <div className={styles.TopicsPage}>
      <Container>
        <div className={styles.Topics}>
          {topics.map(topic => (
            <div 
              key={topic.id} 
              className={styles.TopicLabelContainer}
            >
              <TopicLabel name={topic.name} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}