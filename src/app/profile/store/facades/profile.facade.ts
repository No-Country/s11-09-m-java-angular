import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {RoleModel} from "../../../core/model/role.model";
import {
  selectProfileRolesComplete,
  selectProfileRolesStarted,
  selectProfileSkillsComplete,
  selectProfileSkillsStarted,
  selectProfileTopicsComplete,
  selectProfileTopicsStarted
} from "../selectors/profile.selector";
import {ProfileActions} from "../actions/profile.actions";
import {SkillModel} from "../../../core/model/skill.model";
import {TopicsModel} from "../../../core/model/topics.model";
import {AppFacade} from "../../../shared/store/facades/app.facade";


@Injectable({
  providedIn: 'root'
})
export class ProfileFacade {
  constructor(private store: Store, private appFacade: AppFacade) {
  }

  completeRole(role: RoleModel): void {
    return this.store.dispatch(ProfileActions.finishRole({role: role}))
  }

  getRoleComplete(): Observable<RoleModel[]> {
    return this.store.select(selectProfileRolesComplete)
  }

  startRole(role: RoleModel): void {
    return this.store.dispatch(ProfileActions.startRole({role: role}))
  }

  getRoleStarted(): Observable<RoleModel[]> {
    return this.store.select(selectProfileRolesStarted)
  }


  completeSkill(skill: SkillModel): void {
    return this.store.dispatch(ProfileActions.finishSkill({skill: skill}))
  }

  getSkillComplete(): Observable<SkillModel[]> {
    return this.store.select(selectProfileSkillsComplete)
  }

  startSkill(skill: SkillModel): void {
    return this.store.dispatch(ProfileActions.startSkill({skill: skill}))
  }

  getSkillStarted(): Observable<SkillModel[]> {
    return this.store.select(selectProfileSkillsStarted)
  }


  completeTopics(topic: TopicsModel): void {
    return this.store.dispatch(ProfileActions.finishTopic({topic: topic}))
  }

  getTopicsComplete(): Observable<TopicsModel[]> {
    return this.store.select(selectProfileTopicsComplete)
  }

  startTopic(topic: TopicsModel): void {
    return this.store.dispatch(ProfileActions.startTopic({topic: topic}))
  }

  getTopicsStarted(): Observable<TopicsModel[]> {
    return this.store.select(selectProfileTopicsStarted)
  }

  getRolesAvailable(): Observable<RoleModel[]> {
    this.appFacade.updateTopics()
    return this.appFacade.getRoles()

  }
}
