import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useRedirect } from '../../hooks/useRedirect'
import styles from './SingleTopicPage.module.scss'

interface SingleTopicPageProps {}

export const SingleTopicPage: FC<SingleTopicPageProps> = () => {
  const { id } = useParams()
  useRedirect(id)

  return (
    <div className={styles.SingleTopicPage}>
      Id of the topic is {id}
    </div>
  )
}