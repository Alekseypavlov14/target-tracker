import { FC } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Container } from '../../../../components/Container/Container'
import { useRedirect } from '../../../../hooks/useRedirect'
import { targetsSelector } from '../../slice/targets.slice'
import styles from './TargetDetailsPage.module.scss'

interface TargetDetailsPageProps {}

export const TargetDetailsPage: FC<TargetDetailsPageProps> = () => {
  const id = Number(useParams().id)
  useRedirect(id, `/topic/${id}`)

  const targets = useSelector(targetsSelector)
  const target = targets.find(target => target.id === id)

  return (
    <div className={styles.TargetDetailsPage}>
      <Container>
        <div className={styles.TargetPageHeader}>
          <div className={styles.TargetPageTitle}>
            Target Details Page
          </div>
          <div className={styles.TargetToggleButton}>
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
      </Container>
    </div>
  )
}