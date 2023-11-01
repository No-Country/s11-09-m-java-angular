import {Component, OnInit} from '@angular/core';
import {Edge, NgxGraphModule} from "@swimlane/ngx-graph";
import {ClusterNode, Node} from "@swimlane/ngx-graph/lib/models/node.model";
import {AsyncPipe, CommonModule, NgForOf} from "@angular/common";
import {GraphService} from "../../../core/services/graph.service";

//import { NgxGraphModule } from '@swimlane/ngx-graph'

@Component({
  selector: 'app-tree-graph',
  templateUrl: './tree-graph.component.html',
  standalone: true,
  imports: [NgxGraphModule, NgForOf, AsyncPipe, CommonModule],
  styleUrls: ['./tree-graph.component.scss']
})


export class TreeGraphComponent implements OnInit {


  draggingEnabled: boolean = false;

  nodes: Node[][] = []
  clusters: ClusterNode[] = []
  clusterCounter = 0;
  nodeVoidCounter = 0;
  links: Edge [] = []
  graphData: graph = {
    nodes: [],
    clusters: [],
    links: []
  }


  constructor(private graphService: GraphService) {


  }


  getGraphData() {

    let nodeVoid: Node = this.generateNodeVoid()
    let linkVoid: Edge = this.generateLink('', nodeVoid.id)
    this.graphData.nodes.push(nodeVoid)
    this.nodes.forEach(nodeGroup => {
      this.graphData.nodes.push(...nodeGroup);
      this.graphData.clusters.push(...this.mapNodeGroupToCluster(nodeGroup));
      this.graphData.links.push(...this.mapLinks(nodeGroup));
      ////////////////////////////////////////////////////////
      if (linkVoid.source === '') {
        linkVoid = {
          ...linkVoid,
          source: nodeGroup[0].id
        }
        this.graphData.links.push(linkVoid)
        linkVoid = this.generateLink(nodeVoid.id, '')
      } else {
        linkVoid = {
          ...linkVoid,
          target: nodeGroup[0].id
        }
        this.graphData.links.push(linkVoid)
        nodeVoid = this.generateNodeVoid()
        linkVoid = this.generateLink(nodeGroup[0].id, nodeVoid.id)
        this.graphData.nodes.push(nodeVoid)

      }


    });


  }

  generateNodeVoid(): Node {
    this.nodeVoidCounter++
    return {
      id: `idVoid${this.nodeVoidCounter}`,
      label: ''
    }
  }

  generateLink(source: string, target: string): Edge {
    return {
      id: `idLinkVoid${this.nodeVoidCounter}`,
      source: source,
      target: target
    }
  }


  mapNodeGroupToCluster(nodes: Node[]) {

    const nodesTails = nodes.slice(1);

    const nodesSliced = [];
    for (let i = 0; i < nodesTails.length; i += 3) {
      const grupo = nodesTails.slice(i, i + 3);
      nodesSliced.push(grupo);
    }


    nodesSliced.forEach(nodeGroup => {
      let cluster: ClusterNode = {
        id: '' + this.clusterCounter,
        childNodeIds: nodeGroup.map(node => node.id),
        label: 'Topic',

      }

      this.clusters.push(cluster);
      this.clusterCounter++
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

  ngOnInit(): void {

    this.graphService.getNodeData().subscribe(
      value => {
        this.nodes = value;
        this.getGraphData()
      })
  }


}

interface graph {
  nodes: Node[],
  clusters: ClusterNode[],
  links: Edge[]
}
