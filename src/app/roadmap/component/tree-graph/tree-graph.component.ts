import {Component, Input} from '@angular/core';
import {Edge, NgxGraphModule} from "@swimlane/ngx-graph";
import {ClusterNode, Node} from "@swimlane/ngx-graph/lib/models/node.model";
import {AsyncPipe, CommonModule, NgForOf} from "@angular/common";

//import { NgxGraphModule } from '@swimlane/ngx-graph'

@Component({
  selector: 'app-tree-graph',
  templateUrl: './tree-graph.component.html',
  standalone: true,
  imports: [NgxGraphModule, NgForOf, AsyncPipe, CommonModule],
  styleUrls: ['./tree-graph.component.scss']
})
export class TreeGraphComponent {

  draggingEnabled: boolean = false;

  @Input() nodes!: Node[]
  clusters: ClusterNode[] = []
  links: Edge [] = []


  mapNodeGroupToCluster(nodes: Node[]) {

    const nodesTails = nodes.slice(1);

    const nodesSliced = [];
    for (let i = 0; i < nodesTails.length; i += 3) {
      const grupo = nodesTails.slice(i, i + 3);
      nodesSliced.push(grupo);
    }


    nodesSliced.forEach((nodeGroup, index) => {
      let cluster: ClusterNode = {
        id: '' + index,
        childNodeIds: nodeGroup.map(node => node.id),
        label: 'Topic',

      }

      this.clusters.push(cluster);
    })
    return this.clusters

  }


  mapLinks(nodes: Node[]) {
    const nodeHead = nodes[0]
    const nodesTails = nodes.slice(1);
    const nodesSliced = [];

    for (let i = 0; i < nodesTails.length; i += 3) {
      const grupo = nodesTails.slice(i, i + 3);
      nodesSliced.push(grupo);
    }


    nodesSliced.forEach(value => {
      let link = {
        id: nodeHead.id + value[0].id,
        source: nodeHead.id,
        target: value[0].id
      }
      this.links.push(link);
    })


    return this.links;
  }


}
