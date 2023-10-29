import {AppState} from "../../app.state";
import {TopicModel} from "../../../../core/model/topic.model";

export const handleInitLoad = (state: AppState): AppState => {
  return {
    ...state,
    isLoading: true
  };

};

export const handleTopicsLoadSuccess = (state: AppState, {topics}: { topics: TopicModel[] }): AppState => {
  return {
    ...state,
    topics,
    isLoading: false,
    error: null
  };

};

export const handleTopicsLoadFailure = (state: AppState, {error}: { error: string }): AppState => {
  return {
    ...state,
    topics: [],
    isLoading: false,
    error
  };

};

