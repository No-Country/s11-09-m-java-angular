import {Injectable} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Store} from "@ngrx/store";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthActions} from "../actions/auth.actions";
import {Router} from "@angular/router";
import {TokenService} from "../../../core/services/token.service";
import {AppActions} from "../../../shared/store/actions/app.actions";


@Injectable({
  providedIn: "root"
})
export class AuthEffects {


  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) {
  }

  // noinspection TypeScriptValidateTypes
  loginEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap((action) =>
        this.authService.login(action.credentials).pipe(
          map((response) => AuthActions.loginSuccess({/* user: response.user,*/ token: response.token})),
          catchError((error) => of(AuthActions.loginFailure({error: error.message})))
        )
      )
    )
  );

  registerEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerRequest),
      switchMap((action) =>
        this.authService.register(action.register).pipe(
          map((response) => AuthActions.registerSuccess({/* user: response.user,*/ token: response.token})),
          catchError((error) => of(AuthActions.registerFailure({error: error.message})))
        )
      )
    )
  );

  saveTokenToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap((action) => {
          localStorage.setItem('token', action.token);
          this.router.navigate(["home"])
        }),
        map((response) => AppActions.loadUser()),
        catchError((error) => of(AppActions.loadUserError({error: error.message})))
      ),
  );

  logoutEffect$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.clear();
          this.router.navigate(["home"])
        })
      ),
    {dispatch: false}
  );


}
