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

  private mapToNodesTopics(skill: SkillModel): Node[] {
    return skill.topics.map((topic, id) => ({
      id: topic.name + id, // Genera un ID automático, puedes implementar esta función
      label: topic.name,
      data: {
        isSkill: false,
        colorIn: 'white',
        textColor:'black'
      }
    }));
  }

  private mapToNodesSkill(skill: SkillModel): Node {
    return {
      id: skill.name,
      label: skill.name,
      data: {
        isSkill: true,
        colorSkill: '#4155A7',
        textColor:'white'
      }
    };
  }


}


