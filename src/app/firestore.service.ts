import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  GetRequest(doc): Promise<any>{
    return new Promise((res,rej) => {
      let disposeable = doc.valueChanges().subscribe(
        data => { 
          res(data);
          disposeable.unsubscribe();
        },
        err => {
          rej(err);
        }
      )
    })
  }

  GetRequestByRef(ref): Promise<any>{
    return new Promise((res,rej)=>{
      ref.get().then(snapshot=>{
        if (snapshot.empty) {
          res({}); 
        }
        let array = [];
        snapshot.forEach(doc => {
          array.unshift(doc.data());
        });
        res(array);
      })
    })
  }



  // FRIEND REQUEST
  
  SendFriendRequest(uid:string, email:string){
    return  this.db.doc(`User/${uid}`).set({friendRequestSent: email}, {merge: true});
  }

  GetFriendRequest(uid:string){
    return this.GetRequest(this.db.collection(`User/${uid}/FriendRequest`));
  }

  RespondFriendRequest(uid:string,fid:string,accept:boolean){
    return this.db.doc(`User/${uid}/FriendRequest/${fid}`).set({accept: accept},{merge:true});
  }

  // FRIEND

  GetFriend(uid:string){
    return this.GetRequest(this.db.collection(`User/${uid}/Friend`));
  }

  GetFriendByEmail(uid:string,email:string){
    const ref = this.db.collection(`User/${uid}/Friend`).ref.where("email","==",email);
    return this.GetRequestByRef(ref);
  }

  ToggleFriendAccess(uid:string,fid:string,access:boolean){
    return this.db.doc(`User/${uid}/Friend/${fid}`).set({access:access},{merge:true});
  }

  // WAKEY
  ToggleAlarm(fid:string,wakey:boolean){
    return this.db.doc(`User/${fid}`).set({wakey: wakey},{merge:true});
  }

  GetAlarm(fid:string){
    return this.db.doc(`User/${fid}`).valueChanges();
  }


}
