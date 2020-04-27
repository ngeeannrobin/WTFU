import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css','../menu-style.css']
})
export class AddFriendComponent implements OnInit {

  constructor() { }
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }

  Back() {
    this.emitter.emit({code:"back"});
  }

  Confirm() {

  }

  Delete() {
    
  }

  AddFriend() {
    this.emitter.emit({code:"nav",data:"fren-req"})
  }

}
