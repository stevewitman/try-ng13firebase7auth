import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutHeaderComponent } from './components/layout-header/layout-header.component';
import { AuthSignInComponent } from './components/auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from './components/auth-sign-up/auth-sign-up.component';
import { AuthVerifyEmailComponent } from './components/auth-verify-email/auth-verify-email.component';
import { AuthForgotPasswordComponent } from './components/auth-forgot-password/auth-forgot-password.component';
import { UserStatusComponent } from './components/user-status/user-status.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    LayoutHeaderComponent,
    AuthSignInComponent,
    AuthSignUpComponent,
    AuthVerifyEmailComponent,
    AuthForgotPasswordComponent,
    UserStatusComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  exports: [LayoutHeaderComponent],
})
export class CoreModule {}
