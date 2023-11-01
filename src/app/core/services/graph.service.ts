import {Injectable} from '@angular/core';
import {AppFacade} from "../../shared/store/facades/app.facade";
import {map, Observable} from "rxjs";
import {SkillModel} from "../model/skill.model";
import {Node} from "@swimlane/ngx-graph/lib/models/node.model";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  skills$: Observable<SkillModel[]>

  constructor(private appFacade: AppFacade) {
    this.skills$ = this.appFacade.getSkillsBySelectedRole()
  }

  private mapToNodesTopics(skill: SkillModel): Node[] {
    return skill.topics.map((topic, id) => ({
      id: topic.name + id, // Genera un ID automático, puedes implementar esta función
      label: topic.name
    }));
  }

  private mapToNodesSkill(skill: SkillModel): Node {
    return {
      id: skill.link,
      label: skill.name
    };
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


}


