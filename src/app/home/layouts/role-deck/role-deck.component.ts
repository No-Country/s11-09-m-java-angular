import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardRoleComponent} from "../../../shared/components/card-role/card-role.component";
import {RouterLink} from "@angular/router";
import {RoleModel} from "../../../core/model/role.model";
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
  roles$?: Observable<RoleModel[]>;

  constructor(private appFacade: AppFacade) {
  }

  ngOnInit(): void {
    this.roles$ = this.appFacade.getTopics();
  }

  onRoleClick(role: RoleModel) {
    this.appFacade.selectRole(role)
  }
}
