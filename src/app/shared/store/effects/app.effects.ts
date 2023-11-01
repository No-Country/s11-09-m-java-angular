import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {catchError, concat, map, of, switchMap, withLatestFrom} from "rxjs";
import {TopicsService} from "../../../core/services/topics.service";
import {AppActions} from "../actions/app.actions";
import {UserService} from "../../../core/services/user.service";
import {selectAppRoleSelected} from "../selectors/app.selector";
import {SkillModel} from "../../../core/model/skill.model";


@Injectable({
  providedIn: "root"
})
export class AppEffects {
  // noinspection TypeScriptValidateTypes

  // noinspection TypeScriptValidateTypes
  loadRoleEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadTopics),
      switchMap((action) =>
        this.topicsService.getAllRoles().pipe(
          map((response) => AppActions.loadRoleSuccess({roles: response})),
          catchError((error) => of(AppActions.loadRoleError({error: error.message})))
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
  // Efecto para cargar habilidades (skills)
  loadSkillsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadSkills),
      withLatestFrom(this.store.select(selectAppRoleSelected)),
      switchMap(([action, selectedRole]) => {
        if (!selectedRole) {
          console.log("Entre al null");
          return of(AppActions.loadSkillsError({error: 'Selected role is not defined'}));
        }
        return this.topicsService.getAllSkillsByRole(selectedRole).pipe(
          map((response) => AppActions.loadSkillsSuccess({skills: response})),
          catchError((error) => {
              console.log(error)
              return of(AppActions.loadSkillsError({error: error.message}))
            }
          ));
      })
    )
  );

  // noinspection TypeScriptValidateTypes
  loadTopicsAfterSkillsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AppActions.loadSkillsSuccess),
      switchMap((action: { skills: SkillModel[] }) => {
        const skills = action.skills;
        const observables = skills.map(skill => {
          return this.topicsService.getAllTopicsBySkill(skill).pipe(
            map(topics => AppActions.loadTopicsSuccess({topics, skill}))
          );
        });
        return concat(...observables, [AppActions.setFinishLoading()]);
      })
    )
  );


  constructor(
    private actions$: Actions,
    private store: Store,
    private topicsService: TopicsService,
    private userService: UserService,
    private router: Router,
  ) {
  }


}
