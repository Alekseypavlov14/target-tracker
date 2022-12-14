import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddButton } from '../../../../components/AddButton/AddButton'

interface AddTargetButtonProps {}

export const AddTargetButton: FC<AddTargetButtonProps> = () => {
  const navigate = useNavigate()

  const clickHandler = () => navigate('add')

  return (
    <AddButton onClick={clickHandler} />
  )
}