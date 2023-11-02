import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {IconAddComponent} from "../../../shared/components/icon-add/icon-add.component";
import {RoleModel} from "../../../core/model/role.model";
import {ProfileFacade} from "../../store/facades/profile.facade";
import {Observable} from "rxjs";
import {CardRoleComponent} from "../../../shared/components/card-role/card-role.component";

@Component({
  selector: 'app-button-start-role',
  standalone: true,
  imports: [CommonModule, NgbDropdown, NgbDropdownMenu, NgbDropdownToggle, NgbDropdownItem, IconAddComponent, CardRoleComponent],
  templateUrl: './button-start-role.component.html',
  styleUrls: ['./button-start-role.component.scss']
})
export class ButtonStartRoleComponent implements OnInit {
  rolesAvaliable$?: Observable<RoleModel[]>

  constructor(private profileFacade: ProfileFacade) {

  }

  startRole(role: RoleModel) {
    this.profileFacade.startRole(role)
  }

  ngOnInit(): void {
    this.rolesAvaliable$ = this.profileFacade.getRolesAvailable()
  }


}
