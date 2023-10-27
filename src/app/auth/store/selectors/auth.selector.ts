import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AuthState} from "../auth.state";


export const selectAuth = createFeatureSelector<AuthState>('auth');

export const selectAuthIsLoading = createSelector(
  selectAuth,
  (state: AuthState) => state.isLoading
);
export const selectAuthError = createSelector(
  selectAuth,
  (state: AuthState) => state.error
);

export const selectAuthToken = createSelector(
  selectAuth,
  (state: AuthState) => state.token
);


