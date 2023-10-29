import {INITIAL_STATE} from "../app.state";
import {createReducer, on} from "@ngrx/store";
import {AppActions} from "../actions/app.actions";
import {handleInitLoad, handleTopicsLoadFailure, handleTopicsLoadSuccess} from "./handler/app.handlers";

export const appReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(AppActions.loadTopics, handleInitLoad),
  on(AppActions.loadTopicsSuccess, handleTopicsLoadSuccess),
  on(AppActions.loadTopicsError, handleTopicsLoadFailure),
);

