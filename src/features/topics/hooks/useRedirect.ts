import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useRedirect(param: string | undefined, redirectPath: string = '/') {
  const navigate = useNavigate()

  useEffect(() => {
    if (!param) navigate(redirectPath)
  }, [param, navigate, redirectPath])
}