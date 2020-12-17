import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WeightliftingService} from '../services/weightlifting.service'
import {Router} from '@angular/router'
import {ActivatedRoute} from '@angular/router';
import {Weightlifting} from '../weightlifting.model';
import {DialogRecordWeiComponent} from '../dialog-record-wei/dialog-record-wei.component';



@Component({
  selector: 'app-weightliftingdisplay',
  templateUrl: './weightliftingdisplay.component.html',
  styleUrls: ['./weightliftingdisplay.component.scss']
})

export class WeightliftingDisplayComponent implements OnInit {
  weightlifting: Weightlifting;
  id: String;
  record: Number;

  constructor(private dialog: MatDialog,private weightliftingService: WeightliftingService, private router: ActivatedRoute) { }

  ngOnInit(){
   this.router.params.subscribe(params => {
    this.id = params['id'];
    });
   this.fetchWeightlifting();
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

  openDialog(id): void {
    let dialo = this.dialog.open(DialogRecordWeiComponent);
    dialo.componentInstance.idWei = this.id;
  }

}

