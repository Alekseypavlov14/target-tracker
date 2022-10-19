import { useState, useEffect } from 'react'
import { useSelector } from "react-redux"
import { topicsSelector } from "../slice/topic.slice"
import { TopicEntity } from './../types/Topic.entity'

export function useTopic(id: number) {
  const [topic, setTopic] = useState<TopicEntity | undefined>()
  const topics = useSelector(topicsSelector)

  useEffect(() => {
    const topic = topics.find(topic => topic.id === id)
    setTopic(topic)
  }, [id, topics])

  return topic
}