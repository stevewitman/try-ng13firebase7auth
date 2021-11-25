import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { togglePasswordVisibility, PasswordVisibility} from '../../helpers/helpers'

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss'],
})
export class AuthSignUpComponent implements OnInit {
  passwordVisibility: PasswordVisibility = {
    state: false,
    property: 'password',
    icon: 'visibility_off',
  };
  toggleVisibility = togglePasswordVisibility;

  signinForm = this.fb.group({
    email: ['', [Validators.required]],
    password1: ['', [Validators.required]],
    password2: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSignup(email: string, password: string) {
    // this.authService.signIn(email, password);
    // this.isSignedIn = true;
    // this.signingin = false;
  }

  // toggleVisibility(passwordVisibility: PasswordVisibility): PasswordVisibility {
  //   return togglePasswordVisibility(passwordVisibility);
  // }
}
