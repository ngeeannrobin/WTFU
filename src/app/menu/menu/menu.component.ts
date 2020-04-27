import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuArray: Array<string> = ["main"];
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.CheckLogin().then(loggedIn=>{
      if (!loggedIn){
        this.router.navigate(["/login"]);
      }
    })
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
