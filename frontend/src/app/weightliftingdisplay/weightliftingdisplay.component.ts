import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WeightliftingService} from '../shared/weightlifting.service'
import {Router} from '@angular/router'
import {ActivatedRoute} from '@angular/router';
import {Weightlifting} from '../shared/weightlifting.model';
import {DialogRecordWeiComponent} from '../dialog-record-wei/dialog-record-wei.component';
import {UserService} from '../shared/user.service';
import {RecordWei} from '../shared/recordWei.model';
import {RecordWeiService} from '../shared/recordWei.service';



@Component({
  selector: 'app-weightliftingdisplay',
  templateUrl: './weightliftingdisplay.component.html',
  styleUrls: ['./weightliftingdisplay.component.scss']
})

export class WeightliftingDisplayComponent implements OnInit {
  weightlifting: Weightlifting;
  id: String;
  record: Number;
  token = "";
  records: RecordWei[] = [];
  recordsMen: RecordWei[] = [];
  recordsWomen : RecordWei[] = [];

  constructor(private dialog: MatDialog,private recordWeiService: RecordWeiService,private weightliftingService: WeightliftingService, private router: ActivatedRoute,private userService: UserService) { }

  ngOnInit(){
   this.router.params.subscribe(params => {
    this.id = params['id'];
    });
   this.fetchWeightlifting();
   this.fetchRecordWeiManPublic();
   this.fetchRecordWeiWomanPublic();
   this.token = this.userService.getToken();
   console.log("dede", this.recordsMen);
  }

  fetchWeightlifting(){
    this.weightliftingService
      .getWeightliftingById(this.id)
      .subscribe((data: Weightlifting) => {
        this.weightlifting = data;
        console.log('Data requested ...');
        console.log(this.weightlifting);
      });
  }

  fetchRecordWeiManPublic(){
    this.recordWeiService
      .getRecordManPublic(this.id)
      .subscribe((data: RecordWei[]) => {
        this.recordsMen = data;
        console.log('Data requested ...');
      });
  }

  fetchRecordWeiWomanPublic(){
    this.recordWeiService
      .getRecordWomanPublic(this.id)
      .subscribe((data: RecordWei[]) => {
        this.recordsWomen = data;
        console.log('Data requested ...');
      });
  }

  openDialog(id, name): void {
    let dialo = this.dialog.open(DialogRecordWeiComponent);
    dialo.componentInstance.idWei = id;
    dialo.componentInstance.name = name;
  }

}

