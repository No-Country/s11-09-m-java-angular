import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IconDashboardComponent} from "../../../shared/components/icon-dashboard/icon-dashboard.component";
import {ProfileSkillsListComponent} from "../../components/profile-skills-list/profile-skills-list.component";
import {IconSkillsListComponent} from "../../../shared/components/icon-skills-list/icon-skills-list.component";

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.layout.html',
  standalone: true,
  imports: [CommonModule, IconDashboardComponent, ProfileSkillsListComponent, IconSkillsListComponent],
  styleUrls: ['./profile-skills.layout.scss']
})
export class ProfileSkillsLayout {

}