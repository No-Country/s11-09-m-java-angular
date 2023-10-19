import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormLoginComponent} from "../../components/form-login/form-login.component";
import {ButtonGroupLoginComponent} from "../../layouts/button-group-login/button-group-login.component";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [CommonModule, FormLoginComponent, ButtonGroupLoginComponent],
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage {

}
