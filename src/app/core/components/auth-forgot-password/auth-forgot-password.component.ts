import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-forgot-password',
  templateUrl: './auth-forgot-password.component.html',
  styleUrls: ['./auth-forgot-password.component.scss'],
})
export class AuthForgotPasswordComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onForgotPassword(email: string) {
    this.router.navigate(['forgot-password']);
  }
}
