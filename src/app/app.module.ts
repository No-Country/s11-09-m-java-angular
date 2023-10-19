import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./shared/layouts/navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot([]),
        NgbModule,
        NavbarComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
