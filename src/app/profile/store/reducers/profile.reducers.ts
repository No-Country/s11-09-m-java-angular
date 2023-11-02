import {INITIAL_STATE} from "../profile.state";
import {createReducer, on} from "@ngrx/store";
import {ProfileActions} from "../actions/profile.actions";
import {
  handleCompleteRole,
  handleCompleteSkill,
  handleCompleteTopics,
  handleStartRole,
  handleStartSkill,
  handleStartTopics
} from "./handler/profile.handlers";

export const profileReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(ProfileActions.startRole, handleStartRole),
  on(ProfileActions.finishRole, handleCompleteRole),
  on(ProfileActions.startSkill, handleStartSkill),
  on(ProfileActions.finishSkill, handleCompleteSkill),
  on(ProfileActions.startTopic, handleStartTopics),
  on(ProfileActions.finishTopic, handleCompleteTopics),
);

