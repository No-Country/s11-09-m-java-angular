import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ButtonGroupSocialComponent} from "../button-group-social/button-group-social.component";
import {Router} from "@angular/router";
import {CredentialsModel} from "../../../core/model/credentials.model";
import {AuthFacade} from "../../store/facades/auth-facade.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonGroupSocialComponent, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;
  error$?: Observable<string | null>;
  isLoading$?: Observable<boolean>;


  constructor(private authFacade: AuthFacade, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  login(): void {

    if (this.loginForm.invalid) {
      return;
    }

    const credentials: CredentialsModel = this.loginForm.value;

    this.authFacade.login(credentials)
  }

  ngOnInit(): void {
    this.isLoading$ = this.authFacade.getIsLoading()
    this.error$ = this.authFacade.getError()
  }

}
