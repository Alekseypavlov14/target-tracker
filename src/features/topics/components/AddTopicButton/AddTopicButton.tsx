import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddButton } from '../../../../components/AddButton/AddButton'

interface AddTopicButtonProps {}

export const AddTopicButton: FC<AddTopicButtonProps> = () => {
  const navigate = useNavigate()

  const clickHandler = () => navigate('/topic/add')

  return (
    <AddButton onClick={clickHandler} />
  )
}