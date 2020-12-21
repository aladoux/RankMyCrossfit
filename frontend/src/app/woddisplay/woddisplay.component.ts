import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {WodService} from '../shared/wod.service'
import {ActivatedRoute} from '@angular/router';
import {Wod} from '../shared/wod.model';
import { BrowserModule } from '@angular/platform-browser'
import {Exercise} from '../shared/exercise.model';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogRecordWodComponent} from '../dialog-record-wod/dialog-record-wod.component';
import {UserService} from '../shared/user.service';



@Component({
  selector: 'app-woddisplay',
  templateUrl: './woddisplay.component.html',
  styleUrls: ['./woddisplay.component.scss']
})

export class WodDisplayComponent implements OnInit {
  wod: Wod;
  exercises: Exercise[];
  id: String;
  token = "";

  constructor(private dialog: MatDialog,private wodService: WodService, private router: ActivatedRoute,private userService: UserService) { }

  ngOnInit(){
   this.router.params.subscribe(params => {
    this.id = params['id'];
    });
   this.fetchWod();
   this.token = this.userService.getToken();
  }

  fetchWod(){
    this.wodService
      .getWodById(this.id)
      .subscribe((data: Wod) => {
        this.wod = data;
        this.exercises = data.exercises;
        console.log('Data requested ...');
      });
  }

  openDialog(id): void {
    let dialo = this.dialog.open(DialogRecordWodComponent);
    dialo.componentInstance.idWod = this.id;
  }
}
