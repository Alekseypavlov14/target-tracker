import { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'standard-ui'
import { Container } from '../../../../components/Container/Container'
import { create } from '../../slice/topic.slice'
import styles from './AddTopicPage.module.scss'

interface AddTopicPageProps {}

export const AddTopicPage: FC<AddTopicPageProps> = () => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const updateNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const createTopicHandler = () => {
    if (!name) return
    dispatch(create({ name }))
    navigate('/')
  }

  return (
    <div className={styles.AddTopicPage}>
      <Container>
        <div className={styles.Title}>
          Add New <span>Topic</span>
        </div>

        <div className={styles.Form}>
          <label 
            className={styles.InputLabel}
            htmlFor='name'
          >
            Name:
          </label>

          <input
            onChange={updateNameHandler}
            className={styles.Input} 
            autoComplete='off'
            value={name}
            id='name'
          />
        </div>

        <Button onClick={createTopicHandler}>
          Create
        </Button>
      </Container>
    </div>
  )
}