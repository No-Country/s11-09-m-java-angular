import {Injectable} from '@angular/core';
import {env} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable, shareReplay} from "rxjs";
import {RoleModel} from "../model/role.model";
import {TopicResponseDTO} from "./dto/TopicResponseDTO";
import {SkillModel} from "../model/skill.model";
import {TopicsModel} from "../model/topics.model";

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private apiUrl = env.apiUrl;


  constructor(private http: HttpClient) {
  }

  getAllRoles(): Observable<RoleModel[]> {
    const path = `${this.apiUrl}topics/all`;

    return this.http.get<TopicResponseDTO[]>(path).pipe(
      map((response: TopicResponseDTO[]) => {
        return response
          .filter(item => item.isRoot)
          .map(({name, description, experienceLevel, resources, links}) => ({
            id: 0,
            name,
            description,
            experienceLevel,
            resources,
            skills: [],
            link: links.find(link => link.rel === 'self')?.href
          } as RoleModel));
      }),
      shareReplay() // Comparte la respuesta entre suscripciones
    );
  }

  getAllSkillsByRole(role: RoleModel): Observable<SkillModel[]> {
    if (!role.link) {
      throw new Error('No role link present');
    }

    const path = role.link;

    return this.http.get<TopicResponseDTO>(path).pipe(
      map((response: TopicResponseDTO) => {
        return response.children
          .map(({name, description, experienceLevel, _links}) => ({
            id: 0,
            name,
            description,
            experienceLevel,
            topics: [],
            link: _links.self.href
          } as SkillModel));
      }),
      shareReplay()
    );
  }

  getAllTopicsBySkill(skill: SkillModel): Observable<TopicsModel[]> {
    const path = skill.link;
    return this.http.get<TopicResponseDTO>(path).pipe(
      map((response: TopicResponseDTO) => {
        return response.children
          .map(({name, description}) => ({
            name,
            description,
          } as TopicsModel));
      }),
      shareReplay()
    );
  }


}
