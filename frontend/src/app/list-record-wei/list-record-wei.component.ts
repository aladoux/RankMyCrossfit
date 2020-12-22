import { Component, OnInit } from '@angular/core';
import { RecordWeiService } from '../shared/recordWei.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/user.service';
import {RecordWei} from '../shared/recordWei.model';

@Component({
  selector: 'app-list-record-wei',
  templateUrl: './list-record-wei.component.html',
  styleUrls: ['./list-record-wei.component.scss']
})
export class ListRecordWeiComponent implements OnInit {

recordWei: RecordWei[];
user;
userId;

  constructor(private userService: UserService,private recordWeiService: RecordWeiService, private router: Router, private acRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.acRoute.params.subscribe(params => {
      this.userId = params['id'];
      });
    this.userService.getUserProfile().subscribe(
      res =>{
        this.user = res['user'];
      },
      err =>{}
    );
    this.fetchRecords();
  }

  fetchRecords(){
    this.recordWeiService
      .getRecordWeiByUserId(this.userId)
      .subscribe((data: RecordWei[]) => {
        this.recordWei = data;
        console.log('Data requested ...');
        console.log(this.recordWei);
      });
  }

}
