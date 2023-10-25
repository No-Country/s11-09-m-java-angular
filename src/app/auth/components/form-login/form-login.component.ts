import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonGroupSocialComponent} from "../button-group-social/button-group-social.component";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {CredentialsModel} from "../../../core/model/credentials.model";

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonGroupSocialComponent, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  login(): void {
    console.log("llamando al login")
    if (this.loginForm.invalid) {
      return;
    }

    const credentials: CredentialsModel = this.loginForm.value;

    this.authService.login(credentials).subscribe(
      (response) => {
        // Handle a successful login response here, e.g., navigate to a different page
        console.log("autenticado")
        console.log(response)
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle login error here, e.g., show an error message
        console.error('Login error:', error);
      }
    );
  }

}
