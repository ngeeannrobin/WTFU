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

  back() {
    this.emitter.emit({code:"back"});
  }

  confirm() {

  }

  delete() {
    
  }

}
