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
    this.test();
  }

  test(){
    // this.auth.SignInWithGoogle();
    this.auth.GetUserId().then(uid=>{
      console.log(uid);
    })
  }

}
