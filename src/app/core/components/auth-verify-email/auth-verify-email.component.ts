import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-verify-email',
  templateUrl: './auth-verify-email.component.html',
  styleUrls: ['./auth-verify-email.component.scss'],
})
export class AuthVerifyEmailComponent implements OnInit {
  
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
