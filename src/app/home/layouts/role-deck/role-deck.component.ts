import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardRoleComponent} from "../../../shared/components/card-role/card-role.component";
import {RouterLink} from "@angular/router";
import {TopicModel} from "../../../core/model/topic.model";
import {AppFacade} from "../../../shared/store/facades/app.facade";
import {Observable} from "rxjs";

@Component({
  selector: 'app-role-deck',
  templateUrl: './role-deck.component.html',
  standalone: true,
  imports: [CommonModule, CardRoleComponent, RouterLink],
  styleUrls: ['./role-deck.component.scss']
})
export class RoleDeckComponent implements OnInit {
  roles$?: Observable<TopicModel[]>;

  constructor(private appFacade: AppFacade) {
  }

  ngOnInit(): void {
    this.roles$ = this.appFacade.getTopics();
  }
}
