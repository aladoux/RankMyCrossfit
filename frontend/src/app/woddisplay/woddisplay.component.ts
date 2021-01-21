import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {WodService} from '../shared/wod.service'
import {ActivatedRoute} from '@angular/router';
import {Wod} from '../shared/wod.model';
import { BrowserModule } from '@angular/platform-browser'
import {Exercise} from '../shared/exercise.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogRecordWodComponent} from '../dialog-record-wod/dialog-record-wod.component';
import {UserService} from '../shared/user.service';
import {RecordWodService} from '../shared/recordWod.service';
import {DialogDisplayExerciseComponent} from '../dialog-display-exercise/dialog-display-exercise.component';
import {RecordWod} from '../shared/recordWod.model';



@Component({
  selector: 'app-woddisplay',
  templateUrl: './woddisplay.component.html',
  styleUrls: ['./woddisplay.component.scss']
})

export class WodDisplayComponent implements OnInit {
  wod: Wod;
  exercises: Exercise[];
  exercisesObject: Exercise[];
  id: String;
  token = "";
  records: RecordWod[] = [];
  recordsMen: RecordWod[] = [];
  recordsWomen : RecordWod[] = [];

  constructor(private dialog: MatDialog,private recordWodService: RecordWodService,private wodService: WodService, private router: ActivatedRoute,private userService: UserService) { }

  ngOnInit(){
   this.router.params.subscribe(params => {
    this.id = params['id'];
    });
   this.fetchWod();
   this.fetchRecordWodManPublic();
   this.fetchRecordWodWomanPublic();
   this.token = this.userService.getToken();
  }

  fetchWod(){
    this.wodService
      .getWodById(this.id)
      .subscribe((data: Wod) => {
        this.wod = data;
        this.exercises = data.exercises;
      });
  }

  fetchRecordWodManPublic(){
    this.recordWodService
      .getRecordManPublic(this.id)
      .subscribe((data: RecordWod[]) => {
        this.recordsMen = data;
      });
  }

  fetchRecordWodWomanPublic(){
    this.recordWodService
      .getRecordWomanPublic(this.id)
      .subscribe((data: RecordWod[]) => {
        this.recordsWomen = data;
      });
  }

  openDialog(id, name): void {
    let dialo = this.dialog.open(DialogRecordWodComponent);
    dialo.componentInstance.idWod = id;
    dialo.componentInstance.name = name;
    dialo.afterClosed().subscribe(() => {
      this.fetchRecordWodWomanPublic();
      this.fetchRecordWodManPublic();
      window.location.reload();
    });
  }

  openDialogExo(exo): void {
    let dialo = this.dialog.open(DialogDisplayExerciseComponent);
    dialo.componentInstance.exo = exo;
  }
}
