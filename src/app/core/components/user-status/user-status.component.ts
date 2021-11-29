import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss'],
})
export class UserStatusComponent implements OnInit {
  isSignedIn = false;
  signingup = false;
  signingin = false;
  userEmail = '';
  currentUser: User | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  onSignin() {
    this.router.navigate(['sign-in']);
  }

  onSignup() {
    this.router.navigate(['sign-up']);
  }

  onSignout() {
    this.authService.signOut();
    console.log('Signed out')
  }

}
