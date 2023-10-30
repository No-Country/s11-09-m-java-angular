import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {catchError, map, of, switchMap} from "rxjs";
import {TopicsService} from "../../../core/services/topics.service";
import {AppActions} from "../actions/app.actions";
import {UserService} from "../../../core/services/user.service";


@Injectable({
  providedIn: "root"
})
export class AppEffects {
  // noinspection TypeScriptValidateTypes

  constructor(
    private actions$: Actions,
    private store: Store,
    private topicsService: TopicsService,
    private userService: UserService,
    private router: Router,
  ) {
  }

  // noinspection TypeScriptValidateTypes
  loadTopicsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadTopics),
      switchMap((action) =>
        this.topicsService.getAllTopics().pipe(
          map((response) => AppActions.loadTopicsSuccess({topics: response})),
          catchError((error) => of(AppActions.loadTopicsError({error: error.message})))
        )
      )
    )
  );

  loadUserEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadUser),
      switchMap((action) =>
        this.userService.getUser().pipe(
          map((response) => AppActions.loadUserSuccess({user: response})),
          catchError((error) => of(AppActions.loadTopicsError({error: error.message})))
        )
      )
    )
  );


}
