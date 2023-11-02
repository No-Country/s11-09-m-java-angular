import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconDotComponent} from "../../../shared/components/icon-dot/icon-dot.component";
import {SkillModel} from "../../../core/model/skill.model";
import {Observable} from "rxjs";
import {ProfileFacade} from "../../store/facades/profile.facade";
import {IconSuccessComponent} from "../../../shared/components/icon-success/icon-success.component";

@Component({
  selector: 'app-profile-skills-list',
  standalone: true,
  imports: [CommonModule, IconDotComponent, IconSuccessComponent],
  templateUrl: './profile-skills-list.component.html',
  styleUrls: ['./profile-skills-list.component.scss']
})
export class ProfileSkillsListComponent implements OnInit {

  skillsCompleted$?: Observable<SkillModel[]>
  skillsStarted$?: Observable<SkillModel[]>


  constructor(private profileFacade: ProfileFacade) {
  }

  ngOnInit(): void {
    this.skillsCompleted$ = this.profileFacade.getSkillComplete()
    this.skillsStarted$ = this.profileFacade.getSkillStarted()
  }

}
