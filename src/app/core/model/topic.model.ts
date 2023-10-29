import {TopicResourceModel} from "./topicResource.model";

export interface TopicModel {
  id: number,
  name: string,
  description: string,
  experienceLevel: string,
  resources: TopicResourceModel[]

}

