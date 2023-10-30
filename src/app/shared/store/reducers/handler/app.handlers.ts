import {AppState} from "../../app.state";
import {TopicModel} from "../../../../core/model/topic.model";
import {UserModel} from "../../../../core/model/user.model";

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

export const handleUserLoadSuccess = (state: AppState, {user}: { user: UserModel }): AppState => {
  return {
    ...state,
    user,
    isLoading: false,
    error: null
  };

};

export const handleUserLoadFailure = (state: AppState, {error}: { error: string }): AppState => {
  return {
    ...state,
    user: null,
    isLoading: false,
    error
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

