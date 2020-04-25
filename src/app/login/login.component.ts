import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  message:string = "";
  loading:boolean = false;

  ngOnInit(): void {
    // this.auth.CheckLogin().then(loggedin=>{
    //   if (loggedin)
    //     alert("logged in");
    // })
    this.CheckLoginLoop();
  }

  async Delay(ms){
    return new Promise( resolve => setTimeout(resolve, ms));
  }

  CheckLoginLoop(){
    this.auth.CheckLogin().then(async loggedIn=>{
      await this.Delay(100);
      if (!loggedIn){
        this.CheckLoginLoop();
      } else{
        this.Redirect();
      }
    })
  }

  login(){
    this.loading = true;
    this.message = "Authenticating";
    this.auth.SignInWithGoogle().then(res=>{
      this.Redirect();
    }).catch(err=>{
      this.loading = false;
      switch(err.code){
        case "auth/popup-blocked":
          alert("Popup blocked by browser. Please enable popup and try again.");
          break;
        case "auth/cancelled-popup-request":
        case "auth/popup-closed-by-user":
            break;
        default:
          alert("Mistakes were made: " + err.message);
      }
    });
  }

  Redirect() {
    this.loading = true;
    this.message = "Joining Server";
    this.router.navigate(["/menu"]);
  }

}
