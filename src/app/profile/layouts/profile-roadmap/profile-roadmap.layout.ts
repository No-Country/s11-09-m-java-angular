import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconDashboardComponent} from "../../../shared/components/icon-dashboard/icon-dashboard.component";
import {ProfileRoadmapRoleListComponent} from "../../components/profile-roadmap-role-list/profile-roadmap-role-list.component";

@Component({
  selector: 'app-profile-roadmap',
  standalone: true,
  imports: [CommonModule, IconDashboardComponent, ProfileRoadmapRoleListComponent],
  templateUrl: './profile-roadmap.layout.html',
  styleUrls: ['./profile-roadmap.layout.scss']
})
export class ProfileRoadmapLayout {

}
