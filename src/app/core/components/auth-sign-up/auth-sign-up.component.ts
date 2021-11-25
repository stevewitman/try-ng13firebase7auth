import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.scss'],
})
export class AuthSignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSignup(email: string, password: string) {
    // this.authService.signIn(email, password);
    // this.isSignedIn = true;
    // this.signingin = false;
  }
}
