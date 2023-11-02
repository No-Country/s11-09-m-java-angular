import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardRoleComponent} from "../../../shared/components/card-role/card-role.component";
import {IconAddComponent} from "../../../shared/components/icon-add/icon-add.component";
import {RoleModel} from "../../../core/model/role.model";
import {Observable} from "rxjs";
import {AppFacade} from "../../../shared/store/facades/app.facade";
import {ProfileFacade} from "../../store/facades/profile.facade";
import {ButtonStartRoleComponent} from "../button-start-role/button-start-role.component";

@Component({
  selector: 'app-profile-roadmap-role-list',
  standalone: true,
  imports: [CommonModule, CardRoleComponent, IconAddComponent, ButtonStartRoleComponent],
  templateUrl: './profile-roadmap-role-list.component.html',
  styleUrls: ['./profile-roadmap-role-list.component.scss']
})
export class ProfileRoadmapRoleListComponent {
  rolesStarted$?: Observable<RoleModel[]>;
  roles$?: Observable<RoleModel[]>;

  constructor(private appFacade: AppFacade, private profileFacade: ProfileFacade) {
  }

  ngOnInit(): void {
    this.roles$ = this.appFacade.getRoles();
    this.rolesStarted$ = this.profileFacade.getRoleStarted()
  }

  startRoles(role: RoleModel) {
    this.profileFacade.startRole(role)
  }

}
