import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";
import {RegisterModel} from "../../../core/model/register.model";
import {AuthFacade} from "../../store/facades/auth-facade.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,],
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {
  registerForm: FormGroup;
  load: boolean = false;

  error$?: Observable<string | null>;
  isLoading$?: Observable<boolean>;

  constructor(private formBuilder: FormBuilder, private authFacade: AuthFacade) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]], // Valor inicial para el campo username
      password: ['', Validators.required],  // Valor inicial para el campo password
      passwordConfirm: ['', Validators.required], // Valor inicial para el campo passwordConfirm
      firstname: ['', [Validators.required]], // Valor inicial para el campo firstname
      lastname: ['', Validators.required]  // Valor inicial para el campo lastname
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm')?.value;

    if (password === passwordConfirm) {
      return null; // No hay error, las contraseñas coinciden.
    } else {
      return {passwordMismatch: true}; // Las contraseñas no coinciden.
    }
  }

  register(): void {
    if (this.registerForm.invalid) {
      return;
    }

    const register: RegisterModel = {...this.registerForm.value}
    this.authFacade.register(register)


  }

  ngOnInit(): void {
    this.isLoading$ = this.authFacade.getIsLoading()
    this.error$ = this.authFacade.getError()
  }


}
