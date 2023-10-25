import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonGroupSocialComponent} from "../../components/button-group-social/button-group-social.component";

@Component({
  selector: 'app-button-group-register',
  standalone: true,
    imports: [CommonModule, ButtonGroupSocialComponent],
  templateUrl: './button-group-register.component.html',
  styleUrls: ['./button-group-register.component.scss']
})
export class ButtonGroupRegisterComponent {

}
