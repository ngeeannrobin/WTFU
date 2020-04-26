import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuArray: Array<string> = ["main"];
  constructor() { }

  ngOnInit(): void {
  }

  HandleTap(o: any) {
    switch (o.code){
      case "nav":
        this.menuArray.unshift(o.data);
        break;
      case "back":
        this.menuArray.shift();
        break;
      default:
        break;
    }
  }

}
