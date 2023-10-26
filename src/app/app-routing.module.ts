import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


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
  /*
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then((modulo) => modulo.FeatureModule)
  },
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
