import {FeatureState} from "../../feature.state";

export const handleInitLoad = (state: FeatureState): FeatureState => {
  return {
    ...state,
    isLoading: true
  };

};

export const handleLoadSuccess = (state: FeatureState): FeatureState => {
  return {
    ...state,
    isLoading: false
  };

};

export const handleLoadError = (state: FeatureState, {error}: { error: string }): FeatureState => {
  return {
    ...state,
    error

  };

};


