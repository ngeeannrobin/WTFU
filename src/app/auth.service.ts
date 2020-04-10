import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth
  ) { }


  CheckLogin(): Promise<boolean> {
    let promise: Promise<boolean> = new Promise<boolean>((res)=>{
      this.auth.currentUser.then(user=>{
        res(user!=null);
      })
    })
    return promise;
  }


  GetUserId(): Promise<string> {

    let promise: Promise<string> = new Promise<string>((res)=>{
      this.auth.currentUser.then(user=>{
        res(user?.uid);
      })
    })

    return promise;

  }




  SignInWithGoogle(): Promise<firebase.auth.UserCredential>{
    let provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  }

  SignOut(): Promise<void> {
    return this.auth.signOut()
  }

}
