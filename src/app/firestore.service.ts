import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  GetRequest(doc): Promise<any>{
    return new Promise((res,rej) => {
      doc.valueChanges().subscribe(
        data => { 
          res(data);
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


  SendFriendRequest(uid:string, email:string){
    const ref = this.db.doc(`User/${uid}`);

    return ref.set({friendRequestSent: email}, {merge: true});
  }

  GetFriendRequest(uid:string){
    return this.GetRequest(this.db.collection(`User/${uid}/FriendRequest`));
  }

  RespondFriendRequest(uid:string,fid:string,accept:boolean){
    return this.db.doc(`User/${uid}/FriendRequest/${fid}`).set({accept: accept},{merge:true});
  }


}
