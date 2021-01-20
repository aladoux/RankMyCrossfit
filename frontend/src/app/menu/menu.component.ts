import { Component,Input, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

token="";
user;

  constructor(private userService: UserService) { }
  @Input() isAuth: boolean;
  @Input() username: string;
  ngOnInit(): void {
    this.token = this.userService.getToken();
    if(this.token){
      this.userService.getUserProfile().subscribe(
        res =>{
          this.user = res['user'];
          console.log(this.user);
        },
        err =>{}
      );
    }
  }

}
