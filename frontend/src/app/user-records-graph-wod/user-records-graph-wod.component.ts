import { Component, OnInit } from '@angular/core';
import { Wod } from '../shared/wod.model';
import { RecordWodService} from '../shared/recordWod.service';
import { WodService} from '../shared/wod.service';
import {UserService} from '../shared/user.service';
import {ActivatedRoute} from '@angular/router';
import {Exercise} from '../shared/exercise.model';
import {MatDialog} from '@angular/material/dialog';
import {DialogDisplayExerciseComponent} from '../dialog-display-exercise/dialog-display-exercise.component';
import {DialogRecordWodComponent} from '../dialog-record-wod/dialog-record-wod.component';
import {DialogModifyRecordWodComponent } from '../dialog-modify-record-wod/dialog-modify-record-wod.component';
import {RecordWod} from '../shared/recordWod.model';


@Component({
  selector: 'app-user-records-graph-wod',
  templateUrl: './user-records-graph-wod.component.html',
  styleUrls: ['./user-records-graph-wod.component.scss']
})
export class UserRecordsGraphWodComponent implements OnInit {

  constructor(private dialog: MatDialog,private recordWodService: RecordWodService,private wodService: WodService, private router: ActivatedRoute,private userService: UserService) { }

  idWod: String;
  idUser: String;
  wod: Wod;
  exercises: Exercise[];
  token = "";
  recordWod: RecordWod[];


  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.idWod = params['idWod'];
      this.idUser = params['idUser'];
      });
    this.fetchWod();
    this.fetchRecords();
    this.token = this.userService.getToken();
  }


  fetchWod(){
    this.wodService
      .getWodById(this.idWod)
      .subscribe((data: Wod) => {
        this.wod = data;
        this.exercises = data.exercises;
        console.log('Data requested ...');
      });
  }

  fetchRecords(){
    this.recordWodService
      .getRecordByUserWodId(this.idUser, this.idWod)
      .subscribe((data: RecordWod[]) => {
        this.recordWod = data;
        console.log('Data requested ...');
        console.log("dede",this.recordWod);
      });
  }

  openDialog(id, name): void {
    let dialo = this.dialog.open(DialogRecordWodComponent);
    dialo.componentInstance.idWod = id;
    dialo.componentInstance.name = name;
  }

  openDialogExo(exo): void {
    let dialo = this.dialog.open(DialogDisplayExerciseComponent);
    dialo.componentInstance.exo = exo;
  }

  openDialogMod(record): void {
    let dialo = this.dialog.open(DialogModifyRecordWodComponent);
    dialo.componentInstance.recordWod = record;
  }

  deleteRecordWod(id){
    this.recordWodService.deleteRecordWod(id).subscribe(() => {
      this.fetchRecords();
    });
  }
}
