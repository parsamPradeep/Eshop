import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>=of(null);
  constructor(private afAuth: AngularFireAuth, private route: ActivatedRoute) { 
    this.user$=afAuth.authState;
  }

  logIn(){
    let returnUrl:any = this.route.snapshot.queryParamMap.get('returnUrl');
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.GoogleAuthProvider());
  }
  logOut(){
    this.afAuth.signOut();
  }
}
