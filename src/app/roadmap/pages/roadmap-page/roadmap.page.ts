import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppFacade} from "../../../shared/store/facades/app.facade";
import {RoleModel} from "../../../core/model/role.model";
import {TreeTestsComponent} from "../../component/tree-tests/tree-tests.component";
import {TreeGraphComponent} from "../../component/tree-graph/tree-graph.component";


@Component({
  selector: 'app-roadmap-page',
  standalone: true,
  imports: [CommonModule, TreeTestsComponent, TreeGraphComponent],
  templateUrl: './roadmap.page.html',
  styleUrls: ['./roadmap.page.scss']
})
export class RoadmapPage implements OnInit {

  roleSelected: RoleModel | null = null;
  renderGraph: boolean = true;

  constructor(private appFacade: AppFacade) {
  }


  ngOnInit(): void {
    this.appFacade.loadSkills();
    this.appFacade.getSelectedRole().subscribe(value => {
      this.roleSelected = value
    })

    this.appFacade.getRenderGraph().subscribe(value => {
      this.renderGraph = value;
    });


  }
}


