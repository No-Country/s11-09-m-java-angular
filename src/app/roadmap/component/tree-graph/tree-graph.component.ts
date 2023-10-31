import {Component, Input, OnInit} from '@angular/core';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {GraphService} from "../../../core/services/graph.service";
import {AppFacade} from "../../../shared/store/facades/app.facade";
import {Node} from "@swimlane/ngx-graph/lib/models/node.model";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

//import { NgxGraphModule } from '@swimlane/ngx-graph'

@Component({
  selector: 'app-tree-graph',
  templateUrl: './tree-graph.component.html',
  standalone: true,
  imports: [NgxGraphModule, NgForOf, AsyncPipe, NgIf],
  styleUrls: ['./tree-graph.component.scss']
})
export class TreeGraphComponent {

  draggingEnabled: boolean = false;

  @Input() nodes: Node[]=[]


  constructor(private graphService: GraphService) {

  }

  mapNodeGroupToCluster(node: Node[]) {
    return [this.graphService.mapNodeGroupToCluster(node)]
  }

  mapLinks(node: Node[]) {
    return [this.graphService.mapToNodesToLink(node)]
  }



}
