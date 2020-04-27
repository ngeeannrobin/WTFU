import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'send-friend-request',
  templateUrl: './send-friend-request.component.html',
  styleUrls: ['./send-friend-request.component.css','../menu-style.css']
})
export class SendFriendRequestComponent implements OnInit {
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  email: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  Back(){
    this.emitter.emit({code:"back"});
  }

}
