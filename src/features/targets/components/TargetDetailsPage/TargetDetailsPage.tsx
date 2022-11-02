import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { Container } from '../../../../components/Container/Container'
import { remove, targetsSelector } from '../../slice/targets.slice'
import { ToggleTargetButton } from '../ToggleTargetButton/ToggleTargetButton'
import { Date } from '../../../../components/Date/Date'
import { Button, Confirm } from 'standard-ui'
import { useRedirect } from '../../hooks/useRedirect'
import styles from './TargetDetailsPage.module.scss'

interface TargetDetailsPageProps {}

export const TargetDetailsPage: FC<TargetDetailsPageProps> = () => {
  const [isModalOpened, setModalOpened] = useState(false)

  const openModal = () => setModalOpened(true)
  const closeModal = () => setModalOpened(false)

  const id = Number(useParams().id)
  useRedirect(id)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  function deleteTargetHandler() {
    dispatch(remove(id))
    navigate(`/topic/${id}`, { replace: true })
  }

  const targets = useSelector(targetsSelector)
  const target = targets.find(target => target.id === id)

  const startTime = target?.period.start || window.Date.now()
  const endTime = target?.period.end || window.Date.now()

  return (
    <div className={styles.TargetDetailsPage}>
      <Container>
        <div className={styles.TargetPageHeader}>
          <div className={styles.TargetPageTitle}>
            Target Details Page
          </div>
          <div className={styles.TargetToggleButton}>
            <ToggleTargetButton id={id} done={Boolean(target?.done)} big />
          </div>
        </div>

        <div className={styles.TargetProperty}>
          <div className={styles.TargetPropertyName}>
            Name:
          </div> 
          <div className={styles.TargetPropertyContent}>
            {target?.name}
          </div>
        </div>

        <div className={styles.TargetProperty}>
          <div className={styles.TargetPropertyName}>
            Description:
          </div> 
          <div className={styles.TargetPropertyContent}>
            {target?.description}
          </div>
        </div>

        <div className={styles.TargetProperty}>
          <div className={styles.TargetPropertyName}>
            Period:
          </div> 
          <div className={styles.TargetPropertyContent}>
            <Date time={startTime} /> - <Date time={endTime} />
          </div>
        </div>

        <div className={styles.DangerousSection}>
          <div className={styles.DangerousSectionTitle}>
            Dangerous Zone:
          </div>

          <Button 
            onClick={openModal}
            dangerous
          >
            Delete
          </Button>
        </div>
      </Container>

      {isModalOpened && (
        <Confirm
          onConfirm={deleteTargetHandler}
          close={closeModal}
        >
          Are you sure?
        </Confirm>
      )}
    </div>
  )
}