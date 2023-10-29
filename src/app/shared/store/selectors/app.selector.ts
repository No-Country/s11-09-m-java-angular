import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../app.state";


export const selectApp = createFeatureSelector<AppState>('app');

export const selectAppIsLoading = createSelector(
  selectApp,
  (state: AppState) => state.isLoading
);

export const selectAppError = createSelector(
  selectApp,
  (state: AppState) => state.error
);

export const selectAppUser = createSelector(
  selectApp,
  (state: AppState) => state.error
);

export const selectAppTopics = createSelector(
  selectApp,
  (state: AppState) => state.topics
);


