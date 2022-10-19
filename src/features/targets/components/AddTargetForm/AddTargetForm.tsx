import { FC } from 'react'
import { PeriodLength } from '../../types/period.entity'
import Select from 'react-select'
import styles from './AddTargetForm.module.scss'
import './Select.scss'
import { Button } from '../../../../components/Button/Button'

interface AddTargetFormProps {}

export const AddTargetForm: FC<AddTargetFormProps> = () => {
  const generateOptions = (values: PeriodLength[]) => {
    return values.map(value => ({
      value: value,
      label: value
    }))
  }

  const periodLengthValues = Object.values(PeriodLength)
  const options = generateOptions(periodLengthValues)
  
  return (
    <div className={styles.AddTargetForm}>
      <div className={styles.InputSection}>
        <label 
          className={styles.InputLabel}
          htmlFor='name'
        >
          Name:
        </label>
        <input
          className={styles.Input} 
          id='name'
        />
      </div>

      <div className={styles.InputSection}>
        <label 
          className={styles.InputLabel}
          htmlFor='description'
        >
          Description:
        </label>
        <textarea
          className={styles.Input} 
          id='description'
        />
      </div>

      <div className={styles.InputSection}>
        <div className={styles.InputLabel}>
          Period settings:
        </div>

        <Select 
          options={options}
          defaultValue={options[0]}
          classNamePrefix='Select'
        />
      </div>

      <div className={styles.ButtonSection}>
        <Button onClick={() => {}}>
          Create
        </Button>
      </div>
    </div>
  )
}