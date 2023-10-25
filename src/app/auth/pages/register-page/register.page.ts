import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonGroupLoginComponent} from "../../layouts/button-group-login/button-group-login.component";
import {FormLoginComponent} from "../../components/form-login/form-login.component";
import {FormRegisterComponent} from "../../components/form-register/form-register.component";
import {ButtonGroupRegisterComponent} from "../../layouts/button-group-register/button-group-register.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, ButtonGroupLoginComponent, FormLoginComponent, FormRegisterComponent, ButtonGroupRegisterComponent],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage {

}
