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
      else
        alert("not logged in");
    })
  }

  login(){
    this.auth.SignInWithGoogle().then(res=>{
      alert("login successful");
    }).catch(rej=>{
      alert(rej);
    });
  }

}
