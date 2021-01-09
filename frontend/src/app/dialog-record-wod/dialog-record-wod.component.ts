import { Component, OnInit } from '@angular/core';
import { RecordWodService } from '../shared/recordWod.service';
import {UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-dialog-record-wod',
  templateUrl: './dialog-record-wod.component.html',
  styleUrls: ['./dialog-record-wod.component.scss']
})
export class DialogRecordWodComponent implements OnInit {
  userDetails;
  name: String;
  idWod : String;
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

  constructor(private routeAc: ActivatedRoute,private router: Router,private userService: UserService,public recordWodService: RecordWodService) { }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.recordWodService.addRecordWod(this.userDetails._id,this.idWod,this.name,form.value.record,form.value.state, form.value.date, this.userDetails.sexe, this.userDetails.username).subscribe(
      res => {
        this.resetForm(form);
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
    this.recordWodService.selectedRecordWod = {
      _id: '',
      idUser: '',
      idWod: '',
      name: '',
      record: 0,
      state: '',
      date: new Date(),
      sexe: '',
      nameUs: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
