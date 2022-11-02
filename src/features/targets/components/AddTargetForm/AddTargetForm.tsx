import { FC, useState, ChangeEvent } from 'react'
import { PeriodLength } from '../../types/period.entity'
import { Button } from 'standard-ui'
import { getTimeInMilliseconds } from '../../utils/getTimeInMilliseconds'
import { useParams } from 'react-router'
import { TargetActions } from '../../slice/target.actions'
import { useDispatch } from 'react-redux'
import { create } from '../../slice/targets.slice'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
import styles from './AddTargetForm.module.scss'
import './Select.scss'

interface Option {
  value: string
  label: string
}

interface AddTargetFormProps {}

export const AddTargetForm: FC<AddTargetFormProps> = () => {
  const id = Number(useParams().id)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const periodLengthValues = Object.values(PeriodLength)
  const options = generateOptions(periodLengthValues)
  const [period, setPeriod] = useState<Option>(options[0])

  function generateOptions (values: PeriodLength[]) {
    return values.map(value => convertToOption(value))
  }

  function convertToOption (value: string) {
    return ({
      value: value,
      label: value
    })
  }

  const inputNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const inputDescriptionHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value)
  }

  const selectHandler = (value: Option | null) => {
    if (!value) return
    setPeriod(value)
  }

  const createTargetHandler = () => {
    if (!name) return
    if (!description) return 

    const startDate = Date.now()
    const endDate = Date.now() + getTimeInMilliseconds(period.value)

    const newTarget: TargetActions.Create = {
      name: name,
      description: description,
      period: {
        start: startDate,
        end: endDate,
        length: period.value as PeriodLength
      },
      done: false,
      topicId: id
    }

    dispatch(create(newTarget))
    clearAllInputFields()
    navigate(`/topic/${id}`, { replace: true })
  }

  function clearAllInputFields() {
    setName('')
    setDescription('')
    setPeriod(options[0])
  }

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
          autoComplete='off'
          onChange={inputNameHandler}
          value={name}
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
          autoComplete='off'
          onChange={inputDescriptionHandler}
          value={description}
          id='description'
        />
      </div>

      <div className={styles.InputSection}>
        <div className={styles.InputLabel}>
          Period settings:
        </div>

        <Select 
          value={period}
          onChange={selectHandler}
          options={options}
          classNamePrefix='Select'
          isSearchable={false}
        />
      </div>

      <div className={styles.ButtonSection}>
        <Button onClick={createTargetHandler}>
          Create
        </Button>
      </div>
    </div>
  )
}