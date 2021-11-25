import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  passwordVisibility: PasswordVisibility = {
    state: false,
    property: 'password',
    icon: 'visibility_off',
  };
  toggleVisibility = togglePasswordVisibility;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSignin(email: string, password: string) {
    // this.authService.signIn(email, password);
    // this.isSignedIn = true;
    // this.signingin = false;
  }

  onForgotPassword() {
    this.router.navigate(['forgot-password']);
  }

}
