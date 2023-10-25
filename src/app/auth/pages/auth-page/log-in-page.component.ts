import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormLoginComponent} from "../../components/form-login/form-login.component";
import {ButtonGroupLoginComponent} from "../../layouts/button-group-login/button-group-login.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {CredentialsModel} from "../../../core/model/credentials.model";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, ButtonGroupLoginComponent, FormLoginComponent,],
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPage {

}
