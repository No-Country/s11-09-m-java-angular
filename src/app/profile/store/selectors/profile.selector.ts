import {createFeatureSelector, createSelector} from "@ngrx/store";
import {ProfileState} from "../profile.state";


export const selectProfile = createFeatureSelector<ProfileState>('profile');

export const selectProfileIsLoading = createSelector(
  selectProfile,
  (state: ProfileState) => state.isLoading
);

export const selectProfileRolesComplete = createSelector(
  selectProfile,
  (state: ProfileState) => state.rolesCompleted
);
export const selectProfileSkillsComplete = createSelector(
  selectProfile,
  (state: ProfileState) => state.skillsCompleted
);
export const selectProfileTopicsComplete = createSelector(
  selectProfile,
  (state: ProfileState) => state.topicsCompleted
);

export const selectProfileRolesStarted = createSelector(
  selectProfile,
  (state: ProfileState) => state.rolesStarted
);
export const selectProfileSkillsStarted = createSelector(
  selectProfile,
  (state: ProfileState) => state.skillsStarted
);
export const selectProfileTopicsStarted = createSelector(
  selectProfile,
  (state: ProfileState) => state.topicsStarted
);


