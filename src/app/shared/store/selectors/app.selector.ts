import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../app.state";
import {SkillModel} from "../../../core/model/skill.model";


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
  (state: AppState) => state.user
);

export const selectAppRoles = createSelector(
  selectApp,
  (state: AppState) => state.roles
);

export const selectAppRoleSelected = createSelector(
  selectApp,
  (state: AppState) => state.roleSelected
);

export const selectAppSkillsByRoleSelected = createSelector(
  selectApp,
  (state: AppState) => state.roleSelected ? state.roleSelected.skills : []
);





