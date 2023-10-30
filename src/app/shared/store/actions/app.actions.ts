import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {TopicModel} from "../../../core/model/topic.model";
import {UserModel} from "../../../core/model/user.model";


export const AppActions = createActionGroup({
  source: 'app-actions',
  events: {
    'Load Topics': emptyProps(),
    'Load Topics Error': props<{ error: string }>(),
    'Load Topics Success': props<({ topics: TopicModel[] })>(),
    'Load User': emptyProps(),
    'Load User Error': props<{ error: string }>(),
    'Load User Success': props<({ user: UserModel })>(),
  },
});

