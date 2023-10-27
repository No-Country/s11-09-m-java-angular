import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconDotComponent} from "../../../shared/components/icon-dot/icon-dot.component";

@Component({
  selector: 'app-profile-skills-list',
  standalone: true,
  imports: [CommonModule, IconDotComponent],
  templateUrl: './profile-skills-list.component.html',
  styleUrls: ['./profile-skills-list.component.scss']
})
export class ProfileSkillsListComponent {
  skills: string[] = ['HTML - CSS - JAVA','FIGMA - AdobeXD - PS/AI','lorem', 'lorem'];


}
