import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Container } from '../../../../components/Container/Container'
import { useRedirect } from '../../../../hooks/useRedirect'
import { targetsSelector } from '../../slice/targets.slice'
import { ToggleTargetButton } from '../ToggleTargetButton/ToggleTargetButton'
import { formatDate } from '../../utils/formatDate'
import styles from './TargetDetailsPage.module.scss'

interface TargetDetailsPageProps {}

export const TargetDetailsPage: FC<TargetDetailsPageProps> = () => {
  const id = Number(useParams().id)
  useRedirect(id, `/topic/${id}`)

  const targets = useSelector(targetsSelector)
  const target = targets.find(target => target.id === id)

  const startData = formatDate(target?.period.start || Date.now())
  const endData = formatDate(target?.period.end || Date.now())

  const startDateView = `${startData.day}.${startData.month}.${startData.year}`
  const endDateView = `${endData.day}.${endData.month}.${endData.year}`

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
            {startDateView} - {endDateView}
          </div>
        </div>
      </Container>
    </div>
  )
}