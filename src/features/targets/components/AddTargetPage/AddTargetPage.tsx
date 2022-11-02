import { FC } from 'react'
import { useParams } from 'react-router'
import { Container } from '../../../../components/Container/Container'
import { useRedirect } from '../../../topics/hooks/useRedirect'
import { AddTargetForm } from '../AddTargetForm/AddTargetForm'
import styles from './AddTargetPage.module.scss'

interface AddTargetPageProps {}

export const AddTargetPage: FC<AddTargetPageProps> = () => {
  const id = Number(useParams().id)
  useRedirect(id)

  return (
    <div className={styles.AddTargetPage}>
      <Container>
        <div className={styles.Title}>
          Add New <span>Target</span>
        </div>

        <AddTargetForm />
      </Container>
    </div>
  )
}