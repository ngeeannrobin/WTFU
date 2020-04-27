import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'send-friend-request',
  templateUrl: './send-friend-request.component.html',
  styleUrls: ['./send-friend-request.component.css','../menu-style.css']
})
export class SendFriendRequestComponent implements OnInit {
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  message: string = "";
  email: string = "";
  uid: string;
  loading: boolean = false;
  constructor(
    private auth: AuthService,
    private db: FirestoreService
    ) { }

  ngOnInit(): void {
    this.auth.GetUserId().then(uid=>this.uid=uid);
  }

  Back(){
    this.emitter.emit({code:"back"});
  }

  Send(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
      if (!this.loading) {
        this.loading = true;
        this.db.SendFriendRequest(this.uid,this.email).then(_=>{
          this.loading = false;
          this.email = "";
          this.message = "Friend request sent.";
        });
      }
    } else {
      this.message = "Invalid email format."
    }
  }

}
