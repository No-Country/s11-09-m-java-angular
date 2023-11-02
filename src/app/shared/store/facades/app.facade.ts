import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {selectAuthIsLoading} from "../../../auth/store/selectors/auth.selector";
import {
  selectAppError,
  selectAppRoles,
  selectAppRoleSelected,
  selectAppSkillsByRoleSelected,
  selectAppUser, selectRenderGraph
} from "../selectors/app.selector";
import {AppActions} from "../actions/app.actions";
import {RoleModel} from "../../../core/model/role.model";
import {Store} from "@ngrx/store";
import {UserModel} from "../../../core/model/user.model";
import {SkillModel} from "../../../core/model/skill.model";


@Injectable({
  providedIn: 'root'
})
export class AppFacade {

  constructor(private store: Store) {
  }


  getIsLoading(): Observable<boolean> {
    return this.store.select(selectAuthIsLoading)
  }

  getError(): Observable<string | null> {
    return this.store.select(selectAppError)
  }

  updateTopics() {
    this.store.dispatch(AppActions.loadTopics())
  }

  getRoles(): Observable<RoleModel[]> {
    return this.store.select(selectAppRoles)
  }

  selectRole(roleSelected: RoleModel): void {
    this.store.dispatch(AppActions.selectRole({roleSelected: roleSelected}))

  }

  loadSkills(): void {
    return this.store.dispatch(AppActions.loadSkills())
  }

  getSelectedRole(): Observable<RoleModel | null> {
    return this.store.select(selectAppRoleSelected)
  }

  getSkillsBySelectedRole(): Observable<SkillModel[]> {
    return this.store.select(selectAppSkillsByRoleSelected)
  }


  getUser(): Observable<UserModel | null> {
    return this.store.select(selectAppUser)
  }

  getRenderGraph(): Observable<boolean> {
    return this.store.select(selectRenderGraph)
  }


}
