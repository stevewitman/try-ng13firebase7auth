import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { AuthService, User } from '../../services/auth.service';
import { AuthSignInComponent } from '../auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from '../auth-sign-up/auth-sign-up.component';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }

  onSignin() {
    // this.router.navigate(['sign-in']);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.minWidth = '25%';
    this.matDialog.open(AuthSignInComponent, dialogConfig);

  }

  onSignup() {
    // this.router.navigate(['sign-up']);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.matDialog.open(AuthSignUpComponent, dialogConfig);
  }

  onSignout() {
    this.authService.signOut();
    this.router.navigate(['home']);
    console.log('Signed out')
  }

}
