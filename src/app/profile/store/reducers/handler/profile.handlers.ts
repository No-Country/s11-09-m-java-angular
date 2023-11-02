import {ProfileState} from "../../profile.state";
import {RoleModel} from "../../../../core/model/role.model";
import {SkillModel} from "../../../../core/model/skill.model";
import {TopicsModel} from "../../../../core/model/topics.model";

export const handleStartRole = (state: ProfileState, {role}: { role: RoleModel }): ProfileState => {
  return {
    ...state,
    rolesStarted: [...state.rolesStarted, role]
  };

};

export const handleStartSkill = (state: ProfileState, {skill}: { skill: SkillModel }): ProfileState => {
  return {
    ...state,
    skillsStarted: [...state.skillsStarted, skill]
  };

};

export const handleStartTopics = (state: ProfileState, {topic}: { topic: TopicsModel }): ProfileState => {
  return {
    ...state,
    topicsStarted: [...state.topicsStarted, topic]
  };

};


export const handleCompleteRole = (state: ProfileState, {role}: { role: RoleModel }): ProfileState => {
  return {
    ...state,
    rolesCompleted: [...state.rolesCompleted, role]
  };

};

export const handleCompleteSkill = (state: ProfileState, {skill}: { skill: SkillModel }): ProfileState => {
  return {
    ...state,
    skillsCompleted: [...state.skillsCompleted, skill]
  };

};

export const handleCompleteTopics = (state: ProfileState, {topic}: { topic: TopicsModel }): ProfileState => {
  return {
    ...state,
    topicsCompleted: [...state.topicsCompleted, topic]
  };

};


export const handleLoadSuccess = (state: ProfileState): ProfileState => {
  return {
    ...state,
    isLoading: false
  };

};

export const handleLoadError = (state: ProfileState, {error}: { error: string }): ProfileState => {
  return {
    ...state,
    error

  };

};


