import {TopicModel} from "../../core/model/topic.model";
import {UserModel} from "../../core/model/user.model";

export interface AppState {
  isLoading: boolean;
  topics: TopicModel[];
  user: UserModel | null;
  error: string | null;
}


export const INITIAL_STATE: AppState = {
  isLoading: false,
  topics: [],
  user: null,
  error: null
}
