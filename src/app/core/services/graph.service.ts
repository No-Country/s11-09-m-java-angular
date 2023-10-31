import {Injectable} from '@angular/core';
import {AppFacade} from "../../shared/store/facades/app.facade";
import {map, Observable} from "rxjs";
import {SkillModel} from "../model/skill.model";
import {ClusterNode, Node} from "@swimlane/ngx-graph/lib/models/node.model";
import {Edge} from "@swimlane/ngx-graph";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  skills$: Observable<SkillModel[]>

  constructor(private appFacade: AppFacade) {
    this.skills$ = this.appFacade.getSkillsBySelectedRole()
  }


  getSkills(): Observable<SkillModel[] | null> {
    return this.appFacade.getSkillsBySelectedRole()
  }


  private mapToNodesTopics(skill: SkillModel): Node[] {
    return skill.topics.map((topic, id) => ({
      id: topic.name + id, // Genera un ID automático, puedes implementar esta función
      label: topic.name
    }));
  }

  private mapToNodesSkill(skill: SkillModel): Node {
    const nodes: Node = {
      id: skill.name,
      label: skill.name
    }
    return nodes;
  }

  getNodeData(): Observable<Node[][]> {
    return this.skills$.pipe(
      map(skills => {
        const nodes: Node[][] = [[]];

        skills.forEach(skill => {
          let oneNode: Node[] = []
          oneNode.push(this.mapToNodesSkill(skill));
          oneNode.push(...this.mapToNodesTopics(skill));
          nodes.push(oneNode)
        });


        return nodes.filter(value => value.length > 0);
      })
    );
  }

  getClusterData(): Observable<ClusterNode[][]> {
    return this.getNodeData().pipe(
      map(nodesList => {
        const clusters: ClusterNode[][] = [[]];
        nodesList.forEach(nodes => {
          let cluster: ClusterNode[] = []
          cluster.push(this.mapNodeGroupToCluster(nodes))
          clusters.push(cluster)
        });


        return clusters.filter(value => value.length > 0);
      })
    );
  }


  mapNodeGroupToCluster(nodes: Node[]): ClusterNode {//TODO: CHEQUEAR NULLS OJO
    let cluster: ClusterNode = {
      id: '',
      childNodeIds: [],
      label: '',
    };

    if (nodes.length > 0) {
      const labelNode = nodes[0].label
      cluster.id = labelNode + 'cluster'
      cluster.label = labelNode
      for (let i = 1; i < nodes.length; i++) {
        cluster.childNodeIds?.push(nodes[i].id)
      }
    }


    return cluster;
  }


  mapToNodesToLink(nodes: Node[]): Edge {
    if (nodes.length > 1) {
      return {
        source: nodes[0].id,
        target: nodes[1].id
      };
    }
    return {
      source: '0',
      target: '0'
    };
  }

  getLinkData(): Observable<Edge[]> {
    return this.getNodeData().pipe(
      map(nodesList => {
        const link: Edge[] = [];
        nodesList.forEach(nodes => {
          if (nodes.length > 1) {
            link.push(this.mapToNodesToLink(nodes));
          }

        });
        return link;
      })
    );
  }


}


