import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardRoleComponent} from "../../../shared/components/card-role/card-role.component";
import {IconAddComponent} from "../../../shared/components/icon-add/icon-add.component";

@Component({
  selector: 'app-profile-roadmap-role-list',
  standalone: true,
  imports: [CommonModule, CardRoleComponent, IconAddComponent],
  templateUrl: './profile-roadmap-role-list.component.html',
  styleUrls: ['./profile-roadmap-role-list.component.scss']
})
export class ProfileRoadmapRoleListComponent {
  roles: string[] = [];

  addRoles() {
    this.roles.push('pepe');
  }

}
