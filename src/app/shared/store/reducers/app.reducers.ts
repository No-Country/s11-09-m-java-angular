import {INITIAL_STATE} from "../app.state";
import {createReducer, on} from "@ngrx/store";
import {AppActions} from "../actions/app.actions";
import {
  handleInitLoad,
  handleRoleSelected,
  handleSkillsLoadSuccess,
  handleTopicsLoadFailure,
  handleRoleLoadSuccess,
  handleUserLoadFailure,
  handleUserLoadSuccess, handleTopicsLoadSuccess
} from "./handler/app.handlers";

export const appReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(AppActions.loadRole, handleInitLoad),
  on(AppActions.loadRoleSuccess, handleRoleLoadSuccess),
  on(AppActions.loadRoleError, handleTopicsLoadFailure),
  ///////////////////////////////////
  on(AppActions.loadUser, handleInitLoad),
  on(AppActions.loadUserSuccess, handleUserLoadSuccess),
  on(AppActions.loadUserError, handleUserLoadFailure),
  ///////////////
  on(AppActions.selectRole, handleRoleSelected),
  /////////////////////////
  on(AppActions.loadSkills, handleInitLoad),
  on(AppActions.loadSkillsSuccess, handleSkillsLoadSuccess),
  on(AppActions.loadSkillsError, handleUserLoadFailure),
  //////////////////////////////////////
  on(AppActions.loadTopics, handleInitLoad),
  on(AppActions.loadTopicsSuccess, handleTopicsLoadSuccess),
  on(AppActions.loadTopicsError, handleTopicsLoadFailure),
);

