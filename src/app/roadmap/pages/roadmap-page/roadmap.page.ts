import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppFacade} from "../../../shared/store/facades/app.facade";
import {RoleModel} from "../../../core/model/role.model";
import {TreeTestsComponent} from "../../component/tree-tests/tree-tests.component";
import {TreeGraphComponent} from "../../component/tree-graph/tree-graph.component";
import {GraphService} from "../../../core/services/graph.service";
import {Node} from "@swimlane/ngx-graph/lib/models/node.model";
import {delay} from "rxjs";


@Component({
  selector: 'app-roadmap-page',
  standalone: true,
  imports: [CommonModule, TreeTestsComponent, TreeGraphComponent],
  templateUrl: './roadmap.page.html',
  styleUrls: ['./roadmap.page.scss']
})
export class RoadmapPage implements OnInit {

  roleSelected: RoleModel | null = null;
  isLoading: boolean = true;
  node: Node[] = []

  constructor(private graphService: GraphService, private appFacade: AppFacade) {
  }


  ngOnInit(): void {
    this.appFacade.loadSkills();
    this.appFacade.getSelectedRole().subscribe(value => {
      this.roleSelected = value
    })

    this.appFacade.getIsLoading().subscribe(value => {
      if (!value) {
        setTimeout(() => {
          this.isLoading = value; // Después de 5 segundos, establece isLoading en el valor actual de value (false)
        }, 2000);
      } else {
        this.isLoading = value; // Si value es true, establece isLoading de inmediato
      }
    });


    this.graphService.getNodeData().subscribe(
      value => {
        //this.node = value;
        console.log(value)

      }
    )




  }


}


