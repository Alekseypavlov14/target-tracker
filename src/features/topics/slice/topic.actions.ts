import { TopicEntity } from './../types/Topic.entity'

export namespace TopicActions {
  export interface Create extends Pick<TopicEntity, 'name'> {}
}