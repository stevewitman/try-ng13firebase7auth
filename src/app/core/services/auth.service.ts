import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor(public firebaseAuth: AngularFireAuth) {}

  async signIn(email: string, passsword: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, passsword)
      .then((res) => {
        this.isLoggedIn = true;
        console.log('USER INFO:', JSON.stringify(res.user));
      });
  }

  async signUp(email: string, passsword: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, passsword)
      .then((res) => {
        this.isLoggedIn = true;
        console.log('USER INFO:', JSON.stringify(res.user));
      });
  }

  signOut() {
    this.firebaseAuth.signOut().then((res) => {
      this.isLoggedIn = false;
      console.log('LOGGED OUT');
    });
  }
}
