import {INITIAL_STATE} from "../feature.state";
import {createReducer, on} from "@ngrx/store";
import {FeatureActions} from "../actions/feature.actions";
import {handleInitLoad, handleLoadError, handleLoadSuccess} from "./handler/feature.handlers";

export const featureReducer = createReducer(
  INITIAL_STATE,//ESTE INITIAL STATE DEBE SER DEL STORE
  on(FeatureActions.loadData, handleInitLoad),
  on(FeatureActions.loadDataSuccess, handleLoadSuccess),
  on(FeatureActions.loadDataError, handleLoadError),
);

