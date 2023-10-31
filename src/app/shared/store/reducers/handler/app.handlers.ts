import {AppState} from "../../app.state";
import {RoleModel} from "../../../../core/model/role.model";
import {UserModel} from "../../../../core/model/user.model";
import {SkillModel} from "../../../../core/model/skill.model";
import {TopicsModel} from "../../../../core/model/topics.model";

export const handleInitLoad = (state: AppState): AppState => {
  return {
    ...state,
    isLoading: true
  };

};

export const handleRoleLoadSuccess = (state: AppState, {roles}: { roles: RoleModel[] }): AppState => {
  return {
    ...state,
    roles,
    isLoading: false,
    error: null
  };

};

export const handleUserLoadSuccess = (state: AppState, {user}: { user: UserModel }): AppState => {
  return {
    ...state,
    user,
    isLoading: false,
    error: null
  };

};

export const handleUserLoadFailure = (state: AppState, {error}: { error: string }): AppState => {
  return {
    ...state,
    user: null,
    isLoading: false,
    error
  };

};

export const handleTopicsLoadFailure = (state: AppState, {error}: { error: string }): AppState => {
  return {
    ...state,
    roles: [],
    isLoading: false,
    error
  };

};

export const handleRoleSelected = (state: AppState, {roleSelected}: { roleSelected: RoleModel }): AppState => {
  return {
    ...state,
    roleSelected
  };

};


export const handleSkillsLoadSuccess = (state: AppState, {skills}: { skills: SkillModel[] }): AppState => {
  let role = {
    ...state.roleSelected,
    skills
  } as RoleModel;
  return {
    ...state,
    roleSelected: role,
    isLoading: false,
    error: null
  };

};

export const handleTopicsLoadSuccess = (state: AppState, {topics, skill}: {
  topics: TopicsModel[] ,
  skill: SkillModel
}): AppState => {

  if (topics === null) {
    return state
  }

  if (!state.roleSelected) {
    return state
  }

  if (!state.roleSelected.skills) {
    return state
  }
  let skillUpdated: SkillModel = {
    ...skill,
    topics: topics,
  };


  let roleUpdated = {
    ...state.roleSelected,
    skills: [
      ...state.roleSelected?.skills.filter(existingSkill => existingSkill.name !== skillUpdated.name),
      skillUpdated
    ]
  } as RoleModel;


  return {
    ...state,
    roleSelected: roleUpdated,
    isLoading: false,
    error: null
  };

};


