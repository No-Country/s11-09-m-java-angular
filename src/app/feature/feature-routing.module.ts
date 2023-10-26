import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeaturePage} from "./pages/feature-page/feature.page";

const routes: Routes = [
  {
    path: '', component: FeaturePage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
