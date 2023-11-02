import {createActionGroup, props} from "@ngrx/store";
import {RoleModel} from "../../../core/model/role.model";
import {SkillModel} from "../../../core/model/skill.model";
import {TopicsModel} from "../../../core/model/topics.model";


export const ProfileActions = createActionGroup({
  source: 'profile-actions',
  events: {
    'Start Role': props<{ role: RoleModel }>(),
    'Finish Role': props<{ role: RoleModel }>(),
    'Start Skill': props<{ skill: SkillModel }>(),
    'Finish Skill': props<{ skill: SkillModel }>(),
    'Start Topic': props<{ topic: TopicsModel }>(),
    'Finish Topic': props<{ topic: TopicsModel }>(),

  },
});

