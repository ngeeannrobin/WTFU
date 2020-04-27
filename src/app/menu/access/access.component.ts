import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
    this.message = "Green: can wake you up, Red: can't wake you up, Gray: loading"
  }

  Nav(key:string) {
    this.emitter.emit({code:"nav",data:key});
  }

  Back() {
    this.emitter.emit({code:"back"});
  }

}
