import { FC } from 'react'
import { PeriodLength } from '../../types/period.entity'
import { TargetEntity } from '../../types/target.entity'
import { TargetLabel } from '../TargetLabel/TargetLabel'
import styles from './TargetList.module.scss'

interface TargetListProps {
  targets: TargetEntity[]
}

export const TargetList: FC<TargetListProps> = ({ targets }) => {
  const weekTargets = targets.filter(target => target.period.length === PeriodLength.Week)
  const monthTargets = targets.filter(target => target.period.length === PeriodLength.Month)
  const yearTargets = targets.filter(target => target.period.length === PeriodLength.Year)

  return (
    <div className={styles.TargetList}>
      {weekTargets.length > 0 && (
        <div className={styles.PeriodSection}>
          <div className={styles.PeriodSectionTitle}>
            Week Targets
          </div>

          {weekTargets.map(target => (
            <div 
              className={styles.TargetLabel}
              key={target.id}
            >
              <TargetLabel 
                id={target.id}
                name={target.name} 
                done={target.done}
              />
            </div>
          ))}
        </div>
      )}

      {monthTargets.length > 0 && (
        <div className={styles.PeriodSection}>
          <div className={styles.PeriodSectionTitle}>
            Month Targets
          </div>

          {monthTargets.map(target => (
            <div 
              className={styles.TargetLabel}
              key={target.id}
            >
              <TargetLabel 
                id={target.id}
                name={target.name} 
                done={target.done}
              />
            </div>
          ))}
        </div>
      )}

      {yearTargets.length > 0 && (
        <div className={styles.PeriodSection}>
          <div className={styles.PeriodSectionTitle}>
            Year Targets
          </div>

          {yearTargets.map(target => (
            <div 
              className={styles.TargetLabel}
              key={target.id}
            >
              <TargetLabel 
                id={target.id}
                name={target.name} 
                done={target.done}
              />
            </div>
          ))}
        </div>
      )}

      {weekTargets.length === 0 &&
      monthTargets.length === 0 &&
      yearTargets.length === 0 && (
        <div className={styles.EmptyPlaceholder}>
          It seems you didn't take on <br /> 
          any challenges. Do it! 
        </div>
      )}
    </div>
  )
}