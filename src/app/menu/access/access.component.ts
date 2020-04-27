import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FirestoreService } from 'src/app/firestore.service';

@Component({
  selector: 'access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.css','../menu-style.css']
})
export class AccessComponent implements OnInit {


  @Output() emitter: EventEmitter<any> = new EventEmitter();
  message: string = "Fetching friend data...";
  friends:Array<any> = [];

  noFriend: boolean = false;

  uid:string;


  constructor(
    private auth: AuthService,
    private db: FirestoreService
  ) { }

  ngOnInit(): void {
    this.auth.GetUserId().then(uid=>{
      this.uid=uid;
      this.GetFriend();
    });
  }

  GetFriend(){
    this.db.GetFriend(this.uid).then(friend=>{
      this.friends = friend;
      
      this.noFriend = this.friends.length==0;
      this.message = this.noFriend?"":"Green: access, Red: no access, Gray: loading";
    })
  }

  Toggle(friend) {
    if (!friend.loading){
      friend.loading=true;
      this.db.ToggleFriendAccess(this.uid,friend.uid,!friend.access).then(_=>{
        this.message = "";
        friend.access=!friend.access;
        friend.loading=false;
      })
    }
  }

  Nav(key:string) {
    this.emitter.emit({code:"nav",data:key});
  }

  Back() {
    this.emitter.emit({code:"back"});
  }



}
