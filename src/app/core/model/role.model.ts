import {TopicResourceModel} from "./topicResource.model";
import {SkillModel} from "./skill.model";

export interface RoleModel {
  id: number,
  name: string,
  description: string,
  experienceLevel: string,
  skills: SkillModel[],
  resources: TopicResourceModel[]
  link: string | undefined

}

