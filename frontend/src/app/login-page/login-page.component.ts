import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      ()=>{
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['accueil']);
      }
    );
  }

  onSignOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
