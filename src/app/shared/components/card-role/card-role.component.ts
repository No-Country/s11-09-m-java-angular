import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconRoleComponent} from "../icon-role/icon-role.component";
import {Color} from "../../../core/ui/types/color.type";

@Component({
  selector: 'app-card-role',
  standalone: true,
  imports: [CommonModule, IconRoleComponent],
  templateUrl: './card-role.component.html',
  styleUrls: ['./card-role.component.scss']
})
export class CardRoleComponent {
  @Input() title!: string;
  @Input() showTitle: boolean = true;
  @Input() borderColor: Color = "black";
  @Input() backgroundColor: Color = "white";



}
