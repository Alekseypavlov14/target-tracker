import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { Container } from '../../../../components/Container/Container'
import { AddTargetButton } from '../../../targets/components/AddTargetButton/AddTargetButton'
import { useRedirect } from '../../hooks/useRedirect'
import { useTopic } from '../../hooks/useTopic'
import { useTargets } from '../../../targets/hooks/useTargets'
import { TargetList } from '../../../targets/components/TargetList/TargetList'
import styles from './SingleTopicPage.module.scss'

interface SingleTopicPageProps {}

export const SingleTopicPage: FC<SingleTopicPageProps> = () => {
  const id = Number(useParams().id)
  useRedirect(id)

  const topic = useTopic(id)
  const targets = useTargets(id)

  return (
    <div className={styles.SingleTopicPage}>
      <Container>
        <div className={styles.TopicName}>
          Topic: <span>{topic?.name}</span>
        </div>

        <TargetList targets={targets} />

        <AddTargetButton />
      </Container>
    </div>
  )
}