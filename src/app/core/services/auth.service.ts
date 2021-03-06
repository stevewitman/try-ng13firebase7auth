import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthSignInComponent } from '../components/auth-sign-in/auth-sign-in.component';
import { AuthSignUpComponent } from '../components/auth-sign-up/auth-sign-up.component';

import { Observable, BehaviorSubject, share } from 'rxjs';
import { AuthForgotPasswordComponent } from '../components/auth-forgot-password/auth-forgot-password.component';

export interface User {
  uid?: string;
  email?: string | null;
  emailVerified?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser$ = new BehaviorSubject<User | null>({} as User);

  constructor(
    public angularFireAuth: AngularFireAuth,
    public angularFirestore: AngularFirestore,
    private router: Router,
    public ngZone: NgZone,
    private matDialog: MatDialog
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        this.currentUser$.next({
          uid: user.uid,
          email: user.email,
          emailVerified: user.emailVerified,
        });
      } else {
        this.currentUser$.next(null);
      }
    });
  }

  public getCurrentUser(): Observable<User | null> {
    return this.currentUser$.pipe(share());
  }

  get isSignedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  signUp(email: string, password: string) {
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        this.sendVerificationMail();
        this.setUserData(userCredential.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  sendVerificationMail() {
    return this.angularFireAuth.currentUser
      .then((user) => user!.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  signIn(email: string, password: string) {
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
        });
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  signOut() {
    return this.angularFireAuth.signOut();
  }

  openSignInDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.matDialog.open(AuthSignInComponent, dialogConfig);
  }

  openSignUpDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.matDialog.open(AuthSignUpComponent, dialogConfig);
  }

  openForgotPassword() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.matDialog.open(AuthForgotPasswordComponent, dialogConfig);
  }
}
