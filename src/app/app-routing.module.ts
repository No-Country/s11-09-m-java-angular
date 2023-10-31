import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./core/guards/auth.guard";


const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((modulo) => modulo.HomeModule)
  },
  {
    path: 'roadmap',
    loadChildren: () => import('./roadmap/roadmap.module').then((modulo) => modulo.RoadmapModule)
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./profile/profile.module').then((modulo) => modulo.ProfileModule)
  },
  /*
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then((modulo) => modulo.RoadmapModule)
  },
   */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
