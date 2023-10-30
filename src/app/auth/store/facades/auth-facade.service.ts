import {Injectable} from "@angular/core";
import {AuthState} from "../auth.state";
import {Store} from "@ngrx/store";
import {selectAuthError, selectAuthIsLoading, selectAuthToken} from "../selectors/auth.selector";
import {Observable} from "rxjs";
import {Token} from "../../../core/ui/types/token.type";
import {CredentialsModel} from "../../../core/model/credentials.model";
import {AuthActions} from "../actions/auth.actions";
import {RegisterModel} from "../../../core/model/register.model";


@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  constructor(private store: Store<AuthState>) {
  }

  getIsLoading(): Observable<boolean> {
    return this.store.select(selectAuthIsLoading)
  }

  getError(): Observable<string | null> {
    return this.store.select(selectAuthError)
  }

  login(credentials: CredentialsModel) {
    this.store.dispatch(AuthActions.loginRequest({credentials}))
  }

  register(register: RegisterModel) {
    this.store.dispatch(AuthActions.registerRequest({register}))
  }


  getToken(): Observable<Token> {
    return this.store.select(selectAuthToken)
  }


}
