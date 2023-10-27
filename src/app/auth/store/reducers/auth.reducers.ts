import {INITIAL_STATE} from "../auth.state";
import {createReducer, on} from "@ngrx/store";
import {AuthActions} from "../actions/auth.actions";
import {handleRequest, handleRequestFailure, handleRequestSuccess, handleLogout} from "./handler/auth.handlers";

export const authReducer = createReducer(
  INITIAL_STATE,
  on(AuthActions.loginRequest, handleRequest),
  on(AuthActions.loginSuccess, handleRequestSuccess),
  on(AuthActions.loginFailure, handleRequestFailure),
  on(AuthActions.registerRequest, handleRequest),
  on(AuthActions.registerSuccess, handleRequestSuccess),
  on(AuthActions.registerFailure, handleRequestFailure),
  on(AuthActions.logout, handleLogout),
);

