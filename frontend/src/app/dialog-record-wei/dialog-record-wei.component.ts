import { Component, OnInit } from '@angular/core';
import { RecordWeiService } from '../shared/recordWei.service';
import {UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-dialog-record-wei',
  templateUrl: './dialog-record-wei.component.html',
  styleUrls: ['./dialog-record-wei.component.scss']
})
export class DialogRecordWeiComponent implements OnInit {
  userDetails;
  name: String;
  idWei : String;
  serverErrorMessages: string;
  formisvalid: boolean;


  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res['user'];
      },
      err =>{}
    );
  }

  constructor(private routeAc: ActivatedRoute,private router: Router,private userService: UserService,public recordWeiService: RecordWeiService) { }



  onSubmit(form: NgForm){
    console.log(form.value);
    this.recordWeiService.addRecordWei(this.userDetails._id,this.idWei,this.name,form.value.record,form.value.state,form.value.date, this.userDetails.sexe, this.userDetails.username).subscribe(
      res => {
        this.formisvalid = true;
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
    this.recordWeiService.selectedRecordWei = {
      _id: '',
      idUser: '',
      idWei: '',
      name: '',
      record: 0,
      state: '',
      date: new Date(),
      sexe: '',
      nameUs: '',
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
