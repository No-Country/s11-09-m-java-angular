import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {selectAuthIsLoading} from "../../../auth/store/selectors/auth.selector";
import {Token} from "../../../core/ui/types/token.type";
import {selectAppError, selectAppTopics, selectAppUser} from "../selectors/app.selector";
import {AppActions} from "../actions/app.actions";
import {TopicModel} from "../../../core/model/topic.model";
import {Store} from "@ngrx/store";


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

  getTopics() :Observable<TopicModel[]> {
    return this.store.select(selectAppTopics)
  }


  getUser(): Observable<Token> {
    return this.store.select(selectAppUser)
  }

}
