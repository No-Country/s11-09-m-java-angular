import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { TreeTestsComponent } from './tree-tests/tree-tests.component';


const routes: Routes = [
  // {path: 'inicio', component: InicioComponent, canActivate: [SesionGuard]},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule)
  },
  {
    path: 'feature',
    loadChildren: () => import('./feature/feature.module').then((modulo) => modulo.FeatureModule)
  },
  {
    path: 'treeTests', component: TreeTestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
