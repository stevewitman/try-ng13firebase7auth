import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthForgotPasswordComponent } from './core/components/auth-forgot-password/auth-forgot-password.component';
import { AuthSignInComponent } from './core/components/auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from './core/components/auth-sign-up/auth-sign-up.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomePageComponent } from './feat-home/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'signin',
    component: AuthSignInComponent,
  },
  {
    path: 'signup',
    component: AuthSignUpComponent,
  },
  {
    path: 'forgot-password',
    component: AuthForgotPasswordComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
