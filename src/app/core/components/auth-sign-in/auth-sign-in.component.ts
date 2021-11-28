import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import {
  togglePasswordVisibility,
  PasswordVisibility,
} from '../../helpers/helpers';

@Component({
  selector: 'app-auth-sign-in',
  templateUrl: './auth-sign-in.component.html',
  styleUrls: ['./auth-sign-in.component.scss'],
})
export class AuthSignInComponent implements OnInit {
  authForm!: FormGroup;
  passwordVisibility: PasswordVisibility = {
    state: false,
    property: 'password',
    icon: 'visibility_off',
  };
  toggleVisibility = togglePasswordVisibility;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get email() {
    return this.authForm.get('email');
  }
  get password() {
    return this.authForm.get('password');
  }

  onSubmit() {
    console.log('SING IN - SUBMIT')
  }

}
