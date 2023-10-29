import {CUSTOM_ELEMENTS_SCHEMA, isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./shared/layouts/navbar/navbar.component";
import {TreeTestsComponent} from './tree-tests/tree-tests.component';
import {NgxGraphModule} from '@swimlane/ngx-graph';
import {TreeTest2Component} from './tree-test2/tree-test2.component';
import {HttpClientModule} from "@angular/common/http";

import {authReducer} from "./auth/store/reducers/auth.reducers";
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AuthEffects} from "./auth/store/effects/auth.effects";
import {JwtModule} from "@auth0/angular-jwt";
import {tokenGetter} from "./core/config/tokenGetter";
import {appReducer} from "./shared/store/reducers/app.reducers";
import {AppEffects} from "./shared/store/effects/app.effects";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TreeTestsComponent,
    TreeTest2Component

  ],

  imports: [NgbModule,
    NgxGraphModule,
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({app: appReducer, auth: authReducer,}, {}),
    EffectsModule.forRoot([AuthEffects, AppEffects]),
    NgbModule,
    NavbarComponent,
    HttpClientModule,
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
