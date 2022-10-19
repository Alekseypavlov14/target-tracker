import { useSelector } from 'react-redux';
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { topicsSelector } from '../slice/topic.slice'

export function useRedirect(id: number, redirectPath: string = '/') {
  const navigate = useNavigate()
  const topics = useSelector(topicsSelector)
  
  useEffect(() => {
    if (Number.isNaN(id)) navigate(redirectPath)

    const topic = topics.find(topic => topic.id === id)
    
    if (!topic) navigate(redirectPath)
  }, [id, redirectPath, navigate, topics])
}