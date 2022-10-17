import { TopicEntity } from './../types/Topic.entity'

export namespace TopicActions {
  export interface Create extends Omit<TopicEntity, 'id'> {}
}