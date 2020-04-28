import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FirestoreService } from 'src/app/firestore.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'wakey',
  templateUrl: './wakey.component.html',
  styleUrls: ['./wakey.component.css','../menu-style.css']
})
export class WakeyComponent implements OnInit {
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  message: string = "Fetching friend data...";
  friends:Array<any> = [];
  noFriend: boolean = false;
  uid:string;
  selected:any;
  frenReadSub:Subscription;
  noAccess: boolean = false;
  wakeyData: any = false;

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
      this.message = "";
    })
  }

  Select(friend){
    this.selected = friend;
    this.frenReadSub = this.db.GetAlarm(this.selected.uid).subscribe(data=>{
      this.wakeyData = data;
      this.message = this.wakeyData.wakey?`Waking ${this.selected.name}...`:`Inactive.`;
    }, err=>{
      if (err.code === "permission-denied"){
        this.noAccess = true;
      } else {
        alert(`Error Code ${err.code}: ${err.message}`)
      }
    });
  }

  ToggleWake(){
    if (!this.wakeyData.loading){
      this.message = "Loading...";
      this.wakeyData.loading = true;
      this.db.ToggleAlarm(this.selected.uid,!this.wakeyData.wakey).then(_=>{
        this.wakeyData.loading = false;
      })
    }
    
  }
  

  Req(){
    location.href = "https://api.whatsapp.com/send?text=" + encodeURIComponent("Oi bodoh, gimme access to your alarm.");
  }

  Nav(key:string) {
    this.emitter.emit({code:"nav",data:key});
  }

  Back() {
    if (this.selected){
      this.selected = undefined;
      this.frenReadSub.unsubscribe();
      this.message = "";
    } else {
      this.emitter.emit({code:"back"});
    }
    
  }
}
