import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoadmapPage} from './pages/roadmap-page/roadmap.page';


const routes: Routes = [
  {
    path: '', component: RoadmapPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoadmapRoutingModule {
}
