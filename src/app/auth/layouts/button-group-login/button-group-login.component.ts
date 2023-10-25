import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {IconGoogleComponent} from "../../../shared/components/icon-google/icon-google.component";
import {IconFacebookComponent} from "../../../shared/components/icon-facebook/icon-facebook.component";
import {IconGithubComponent} from "../../../shared/components/icon-github/icon-github.component";
import {ButtonGroupSocialComponent} from "../../components/button-group-social/button-group-social.component";
import {FormLoginComponent} from "../../components/form-login/form-login.component";

@Component({
  selector: 'app-button-group-login',
  templateUrl: './button-group-login.component.html',
  standalone: true,
  imports: [CommonModule, ButtonGroupSocialComponent],
  styleUrls: ['./button-group-login.component.scss']
})
export class ButtonGroupLoginComponent {

}
