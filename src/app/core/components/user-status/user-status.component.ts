import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styleUrls: ['./user-status.component.scss'],
})
export class UserStatusComponent implements OnInit {
  isSignedIn = false;
  signingup = false;
  signingin = false;
  user = 'Steve';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  signin() {
    this.signingin = true;
    this.signingup = false;
    this.router.navigate(['signin']);
  }

  signup() {
    this.signingup = true;
    this.signingin = false;
    this.router.navigate(['signup']);
  }

  signout() {
    // this.authService.signOut();
    this.isSignedIn = false;
  }

}
