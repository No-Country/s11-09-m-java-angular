import {createActionGroup, emptyProps, props} from "@ngrx/store";
import {CredentialsModel} from "../../../core/model/credentials.model";
import {RegisterModel} from "../../../core/model/register.model";


export const AuthActions = createActionGroup({
  source: 'login-actions',
  events: {
    'Login Request': props<{ credentials: CredentialsModel }>(),
    'Login Success': props<{ /*user: User,*/ token: string }>(),
    'Login Failure': props<{ error: string }>(),
    'Register Request': props<{ register: RegisterModel }>(),
    'Register Success': props<{ /*user: User,*/ token: string }>(),
    'Register Failure': props<{ error: string }>(),
    'Logout': emptyProps(),
  },
});

