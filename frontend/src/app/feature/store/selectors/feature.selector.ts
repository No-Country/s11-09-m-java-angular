import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FeatureState} from "../feature.state";


export const selectFeature = createFeatureSelector<FeatureState>('feature_name');

export const selectFeatureIsLoading = createSelector(
  selectFeature,
  (state: FeatureState) => state.isLoading
);


