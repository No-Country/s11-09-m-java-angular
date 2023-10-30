import {Injectable} from '@angular/core';
import {env} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {TopicModel} from "../model/topic.model";
import {TopicResponseDTO} from "./dto/TopicResponseDTO";

@Injectable({
  providedIn: 'root'
})
export class TopicsService {
  private apiUrl = env.apiUrl;


  constructor(private http: HttpClient) {
  }

  getAllTopics(): Observable<TopicModel[]> {
    const path = this.apiUrl + 'topics/all';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<TopicResponseDTO[]>(path, {headers}).pipe(
      map((response: TopicResponseDTO[]) => {
        return response.map(item => {
          return {
            id: 0,
            name: item.name,
            description: item.description,
            experienceLevel: item.experienceLevel,
            resources: item.resources
          } as TopicModel;
        });
      })
    );
  }


}
