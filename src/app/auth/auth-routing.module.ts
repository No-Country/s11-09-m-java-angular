import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogInPage} from "./pages/auth-page/log-in-page.component";
import {RegisterPage} from "./pages/register-page/register.page";

const routes: Routes = [
  {
    path: 'login', component: LogInPage
  },
  {
    path: 'register', component: RegisterPage
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
