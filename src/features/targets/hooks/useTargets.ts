import { useSelector } from "react-redux"
import { targetsSelector } from "../slice/targets.slice"

export function useTargets(topicId: number) {
  const targets = useSelector(targetsSelector)
  const topicsTargets = targets.filter(target => target.topicId === topicId)
  return topicsTargets
}