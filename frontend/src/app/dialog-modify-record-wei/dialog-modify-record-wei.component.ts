import { Component, OnInit } from '@angular/core';
import { RecordWeiService } from '../shared/recordWei.service';
import {UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dialog-modify-record-wei',
  templateUrl: './dialog-modify-record-wei.component.html',
  styleUrls: ['./dialog-modify-record-wei.component.scss']
})
export class DialogModifyRecordWeiComponent implements OnInit {
  recordWei;
  name: String;
  idWei : String;
  serverErrorMessages: string;
  formisvalid: boolean;


  constructor(private routeAc: ActivatedRoute,private router: Router,private userService: UserService,public recordWeiService: RecordWeiService) { }

  ngOnInit(): void {

  }


  onSubmit(form: NgForm){
    this.recordWeiService.updateRecordWei(this.recordWei._id,form.value.record,form.value.state,form.value.date).subscribe(
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
      nameUs: ''
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

}
