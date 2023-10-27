import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoadmapLayout} from "../../layouts/profile-roadmap/profile-roadmap.layout";
import {ProfileSkillsLayout} from "../../layouts/profile-skills/profile-skills.layout";

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, ProfileRoadmapLayout, ProfileSkillsLayout],
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss']
})
export class ProfilePage {

}
