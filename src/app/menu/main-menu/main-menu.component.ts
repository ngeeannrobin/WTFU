import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css','../menu-style.css']
})
export class MainMenuComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  messages: Array<string> = [];

  ngOnInit(): void {
  }

  out() {
    this.auth.SignOut().then(_=>{
      this.router.navigate(["/login"]);
    })
  }

  add() {
    this.emitter.emit({code:"nav",data:"add"});
  }

  credit() {
    this.messages = ['Art assets by:\n Spry Fox LLC','Application developed by:\nRobin DeBank'];
  }

  creditDone(emitted) {
    this.messages = [];
  }

}
