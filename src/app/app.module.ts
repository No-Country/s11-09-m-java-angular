import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import { TreeTestsComponent } from './tree-tests/tree-tests.component';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    TreeTestsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    NgbModule,
    NgxGraphModule,
    DiagramModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
