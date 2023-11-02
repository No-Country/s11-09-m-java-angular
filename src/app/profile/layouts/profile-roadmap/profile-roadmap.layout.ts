import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ProfileRoadmapRoleListComponent
} from "../../components/profile-roadmap-role-list/profile-roadmap-role-list.component";
import {IconRoadmapComponent} from "../../../shared/components/icon-roadmap/icon-roadmap.component";

@Component({
  selector: 'app-profile-roadmap',
  standalone: true,
  imports: [CommonModule, ProfileRoadmapRoleListComponent, IconRoadmapComponent],
  templateUrl: './profile-roadmap.layout.html',
  styleUrls: ['./profile-roadmap.layout.scss']
})
export class ProfileRoadmapLayout {

}
