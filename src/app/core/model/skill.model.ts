import {TopicsModel} from "./topics.model";

export interface SkillModel {
  id: number,
  name: string,
  description: string,
  experienceLevel: string,
  topics: TopicsModel[],
  //"topicRole": "label:backend",
  link: string
}


