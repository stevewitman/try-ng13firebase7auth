import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-forgot-password',
  templateUrl: './auth-forgot-password.component.html',
  styleUrls: ['./auth-forgot-password.component.scss'],
})
export class AuthForgotPasswordComponent implements OnInit {
  authForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<AuthForgotPasswordComponent>
  ) {}

  get email() {
    return this.authForm.get('email');
  }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {}

  onClose() {
    this.matDialogRef.close();
  }
}
