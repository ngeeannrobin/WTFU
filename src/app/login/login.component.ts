import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.CheckLogin().then(loggedin=>{
      if (loggedin)
        alert("logged in");
    })
  }

  login(){
    this.auth.SignInWithGoogle().then(res=>{
      alert("login successful");
    }).catch(err=>{
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

}
