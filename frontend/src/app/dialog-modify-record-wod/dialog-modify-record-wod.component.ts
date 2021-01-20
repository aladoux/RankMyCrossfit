import { Component, OnInit } from '@angular/core';
import { RecordWodService } from '../shared/recordWod.service';
import {UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dialog-modify-record-wod',
  templateUrl: './dialog-modify-record-wod.component.html',
  styleUrls: ['./dialog-modify-record-wod.component.scss']
})
export class DialogModifyRecordWodComponent implements OnInit {
  recordWod;
  name: String;
  idWod : String;
  serverErrorMessages: string;
  formisvalid: boolean;

  constructor(private routeAc: ActivatedRoute,private router: Router,private userService: UserService,public recordWodService: RecordWodService) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm){
    console.log(this.recordWod._id);
    this.recordWodService.updateRecordWod(this.recordWod._id,form.value.record,form.value.state,form.value.date).subscribe(
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
    this.recordWodService.selectedRecordWod = {
      _id: '',
      idUser: '',
      idWod: '',
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
