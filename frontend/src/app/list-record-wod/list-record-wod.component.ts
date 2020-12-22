import { Component, OnInit } from '@angular/core';
import { RecordWodService } from '../shared/recordWod.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../shared/user.service';
import {RecordWod} from '../shared/recordWod.model';

@Component({
  selector: 'app-list-record-wod',
  templateUrl: './list-record-wod.component.html',
  styleUrls: ['./list-record-wod.component.scss']
})
export class ListRecordWodComponent implements OnInit {

  recordWod: RecordWod[];
  user;
  userId;

  constructor(private userService: UserService,private recordWodService: RecordWodService, private router: Router, private acRoute: ActivatedRoute) { }

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
    this.recordWodService
      .getRecordWodByUserId(this.userId)
      .subscribe((data: RecordWod[]) => {
        this.recordWod = data;
        console.log('Data requested ...');
        console.log(this.recordWod);
      });
  }

  deleteRecordWod(id){
    this.recordWodService.deleteRecordWod(id).subscribe(() => {
      this.fetchRecords();
    });
  }

}
