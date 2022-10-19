import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../../../../components/Container/Container'
import { AddTargetButton } from '../../../targets/components/AddTargetButton/AddTargetButton'
import { useRedirect } from '../../hooks/useRedirect'
import { useTopic } from '../../hooks/useTopic'
import styles from './SingleTopicPage.module.scss'

interface SingleTopicPageProps {}

export const SingleTopicPage: FC<SingleTopicPageProps> = () => {
  const { id } = useParams()
  useRedirect(Number(id))

  const topic = useTopic(Number(id))

  return (
    <div className={styles.SingleTopicPage}>
      <Container>
        <div className={styles.TopicName}>
          Topic: <span>{topic?.name}</span>
        </div>

        <AddTargetButton />
      </Container>
    </div>
  )
}