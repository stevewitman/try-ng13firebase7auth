import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { AuthService } from '../../services/auth.service';
import {
  togglePasswordVisibility,
  PasswordVisibility,
} from '../../helpers/helpers';

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss'],
})
export class AuthSignUpComponent implements OnInit {
  authForm!: FormGroup;
  passwordVisibility: PasswordVisibility = {
    state: false,
    property: 'password',
    icon: 'visibility',
  };
  toggleVisibility = togglePasswordVisibility;
  validatePasswordMinLength = 6;
  validatePasswordMaxLength = 24;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AuthSignUpComponent>
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(this.validatePasswordMinLength),
          Validators.maxLength(this.validatePasswordMaxLength),
        ],
      ],
    });
  }

  get email() {
    return this.authForm.get('email');
  }
  get password() {
    return this.authForm.get('password');
  }

  onSubmit(email: string, password: string) {
    this.authService.signUp(email, password);
  }

  getPasswordErrorMessage() {
    let message = '';
    if (this.authForm.value.password.length === 0) {
      message = 'Password is required';
    } else if (
      this.authForm.value.password.length < this.validatePasswordMinLength
    ) {
      message = 'Password should be a minimum of 6 characters';
    } else if (
      this.authForm.value.password.length > this.validatePasswordMaxLength
    ) {
      message = 'Password should be a maximum of 24 characters';
    } else if (!this.hasAtLeastOneNumber(this.authForm.value.password)) {
      message = 'At least one number is required';
    } else if (!this.hasAtLeastOneLetter(this.authForm.value.password)) {
      message = 'At least one letter is required';
    }
    return message;
  }

  hasAtLeastOneNumber(value: string) {
    const hasAtLeastOneNumber = /.*[0-9].*/;
    return hasAtLeastOneNumber.test(value);
  }

  hasAtLeastOneLetter(value: string) {
    const hasAtLeastOneLetter = /[a-zA-Z]/;
    return hasAtLeastOneLetter.test(value);
  }
}
