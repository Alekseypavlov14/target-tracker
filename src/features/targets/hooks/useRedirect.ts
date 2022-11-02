import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { targetsSelector } from '../slice/targets.slice'

export function useRedirect(id: number, redirectPath: string = '/') {
  const navigate = useNavigate()
  const targets = useSelector(targetsSelector)
  
  useEffect(() => {
    if (Number.isNaN(id)) navigate(redirectPath)

    const target = targets.find(target => target.id === id)
    
    if (!target) navigate(redirectPath)
  }, [id, redirectPath, navigate, targets])
}