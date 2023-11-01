import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {RoleModel} from "../../../core/model/role.model";
import {UserModel} from "../../../core/model/user.model";
import {SkillModel} from "../../../core/model/skill.model";
import {TopicsModel} from "../../../core/model/topics.model";


export const AppActions = createActionGroup({
  source: 'app-actions',
  events: {
    'Load Role': emptyProps(),
    'Load Role Error': props<{ error: string }>(),
    'Load Role Success': props<({ roles: RoleModel[] })>(),
    ////////////////////////////////////////////////////////////////////////
    'Load User': emptyProps(),
    'Load User Error': props<{ error: string }>(),
    'Load User Success': props<({ user: UserModel })>(),
    ////////////////////////////////////////////////////////////////////////
    'Select Role': props<({ roleSelected: RoleModel })>(),
    ////////////////////////////////////////////////////////////////////////
    'Load Skills': emptyProps(),
    'Load Skills Error': props<{ error: string }>(),
    'Load Skills Success': props<({ skills: SkillModel[] })>(),
    ////////////////////////////////////////////////////////////////////////
    'Load Topics': emptyProps(),
    'Load Topics Error': props<{ error: string }>(),
    'Load Topics Success': props<({ topics:  TopicsModel[] , skill: SkillModel })>(),

    'Set Finish Loading':emptyProps(),
  },
});

