import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  showSucessMessage: boolean;
  serverErrorMessages: string;

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      this.router.navigateByUrl('/userprofile');
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.userService.postUser(form.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(form);
        this.router.navigate(['/login']);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else{this.serverErrorMessages = 'Something went wrong.Please contact admin.';}
      }
    );
  }

  resetForm(form: NgForm) {
    this.userService.selectedUser = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      sexe: '',
      dateNaiss: new Date(),
      nation: '',
      type: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
