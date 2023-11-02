import {RoleModel} from "../../core/model/role.model";
import {SkillModel} from "../../core/model/skill.model";
import {TopicsModel} from "../../core/model/topics.model";

export interface ProfileState {
  isLoading: boolean;
  rolesStarted: RoleModel[];
  rolesCompleted: RoleModel[];
  skillsStarted: SkillModel[];
  skillsCompleted: SkillModel[];
  topicsStarted: TopicsModel[];
  topicsCompleted: TopicsModel[];
  error: string | null;
}


export const INITIAL_STATE: ProfileState = {
  isLoading: false,
  rolesStarted: [],
  rolesCompleted: [],
  skillsStarted: [],
  skillsCompleted: [],
  topicsStarted: [],
  topicsCompleted: [],
  error: null
}
