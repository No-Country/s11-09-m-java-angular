import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {selectAuthIsLoading} from "../../../auth/store/selectors/auth.selector";
import {selectAppError, selectAppTopics, selectAppUser} from "../selectors/app.selector";
import {AppActions} from "../actions/app.actions";
import {TopicModel} from "../../../core/model/topic.model";
import {Store} from "@ngrx/store";
import {UserModel} from "../../../core/model/user.model";


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

  getTopics(): Observable<TopicModel[]> {
    return this.store.select(selectAppTopics)
  }


  getUser(): Observable<UserModel | null> {
    return this.store.select(selectAppUser)
  }

}
