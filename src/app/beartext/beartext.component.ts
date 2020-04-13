import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'beartext',
  templateUrl: './beartext.component.html',
  styleUrls: ['./beartext.component.css']
})
export class BeartextComponent implements OnInit {

  constructor() { }
  @Input() messages: Array<string>;
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  index: number = 0;
  ngOnInit(): void {
  }

  next() {
    this.index++;
    if (this.index>=this.messages.length){
      this.done();
    }
  }

  done() {
    this.emitter.emit("done");
  }

}
