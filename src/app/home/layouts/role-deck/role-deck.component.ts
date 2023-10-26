import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardRoleComponent} from "../../../shared/components/card-role/card-role.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-role-deck',
  templateUrl: './role-deck.component.html',
  standalone: true,
    imports: [CommonModule, CardRoleComponent, RouterLink],
  styleUrls: ['./role-deck.component.scss']
})
export class RoleDeckComponent {

}
