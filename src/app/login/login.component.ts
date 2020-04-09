import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  message:string = "";
  loading:boolean = false;

  ngOnInit(): void {
    this.auth.CheckLogin().then(loggedin=>{
      if (loggedin)
        alert("logged in");
      // else
      //   alert("not logged in");
    })
  }

  login(){
    this.loading = true;
    this.message = "Authenticating";
    this.auth.SignInWithGoogle().then(res=>{
      this.message = "Joining Server"
    }).catch(rej=>{
      this.loading = false;
      alert(rej);
    });
  }

}
