import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconRoleComponent} from "../icon-role/icon-role.component";
import {Color} from "../../../core/ui/types/color.type";
import {IconBackendComponent} from "../icon-backend/icon-backend.component";
import {IconFrontendComponent} from "../icon-frontend/icon-frontend.component";
import {IconDevopsComponent} from "../icon-devops/icon-devops.component";
import {IconUxUiComponent} from "../icon-ux-ui/icon-ux-ui.component";
import {IconQaComponent} from "../icon-qa/icon-qa.component";
import {IconCibersecurityComponent} from "../icon-cibersecurity/icon-cibersecurity.component";

@Component({
  selector: 'app-card-role',
  standalone: true,
  imports: [CommonModule, IconRoleComponent, IconBackendComponent, IconFrontendComponent, IconDevopsComponent, IconUxUiComponent, IconQaComponent, IconCibersecurityComponent],
  templateUrl: './card-role.component.html',
  styleUrls: ['./card-role.component.scss']
})
export class CardRoleComponent {
  @Input() title!: string;
  @Input() showTitle: boolean = true;
  @Input() borderColor: Color = "black";
  @Input() backgroundColor: Color = "white";
  @Input() role: string = '';


}
