import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FirestoreService } from 'src/app/firestore.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css','../menu-style.css']
})
export class AddFriendComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private db: FirestoreService
  ) { }
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  uid:string;
  fReq:Array<any>=[];
  message:string = "Fetching friend requests...";
  fReqSub:Subscription;
  ngOnInit(): void {
    this.auth.GetUserId().then(uid=>{
      this.uid=uid;
      this.GetFriendRequest();
    });
    
  }

  ngOnDestroy(): void {
    this.fReqSub.unsubscribe();
  }

  Back() {
    this.emitter.emit({code:"back"});
  }

  GetFriendRequest(){
    // this.db.GetFriendRequest(this.uid).then(data=>{
    //   this.fReq=data;
    //   this.message = data.length==0?"No pending friend requests.":"";
    // })
    this.fReqSub = this.db.GetFriendRequest(this.uid).subscribe(data=>{
      this.fReq = data;
      this.message = data.length==0?"No pending friend requests.":"";
    })
  }

  HandleConfirmation(req:any,accept:boolean){
    if (!req.loading){
      req.loading = true;
      req.accept = accept;
      this.db.RespondFriendRequest(this.uid,req.uid,accept).then(_=>{
        this.fReq.splice(this.fReq.indexOf(req),1);
        this.message = this.fReq.length==0?"No pending friend requests.":"";
      })
    }
    
  }

  AddFriend() {
    this.emitter.emit({code:"nav",data:"fren-req"})
  }

}
