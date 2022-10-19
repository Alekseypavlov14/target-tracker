import { FC } from 'react'
import { useParams } from 'react-router'
import { Container } from '../../../../components/Container/Container'
import { useRedirect } from '../../../../hooks/useRedirect'
import styles from './AddTargetPage.module.scss'

interface AddTargetPageProps {}

export const AddTargetPage: FC<AddTargetPageProps> = () => {
  const id = Number(useParams().id)
  useRedirect(id)

  return (
    <div className={styles.AddTargetPage}>
      <Container>
        Add Topic Page
      </Container>
    </div>
  )
}