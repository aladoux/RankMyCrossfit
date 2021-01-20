import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WeightliftingService} from '../shared/weightlifting.service'
import {Router} from '@angular/router'
import {ActivatedRoute} from '@angular/router';
import {Weightlifting} from '../shared/weightlifting.model';
import {DialogRecordWeiComponent} from '../dialog-record-wei/dialog-record-wei.component';
import {UserService} from '../shared/user.service';
import {RecordWei} from '../shared/recordWei.model';
import {RecordWeiService} from '../shared/recordWei.service';
import {DialogModifyRecordWeiComponent} from '../dialog-modify-record-wei/dialog-modify-record-wei.component'

@Component({
  selector: 'app-user-records-graph',
  templateUrl: './user-records-graph.component.html',
  styleUrls: ['./user-records-graph.component.scss']
})
export class UserRecordsGraphComponent implements OnInit {


  public recordOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public recordLabels = ['2006','2007','2008','2009','2010'];
  public barChartType = 'line';
  public recordLegend = true;
  public recordData = [
    {data: [], label:'Your performance'}
  ];

  weightlifting: Weightlifting;
  idWei: String;
  idUser: String;
  record: Number;
  token = "";
  recordWei: RecordWei[] = [];
  data: Number[] = [];
  label: string[] = [];

  constructor(private dialog: MatDialog,private recordWeiService: RecordWeiService,private weightliftingService: WeightliftingService, private router: ActivatedRoute,private userService: UserService) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.idWei = params['idWei'];
      this.idUser = params['idUser'];
      });
     this.fetchWeightlifting();
     this.fetchRecords();
     this.token = this.userService.getToken();
     this.getData();
  }

  fetchWeightlifting(){
    this.weightliftingService
      .getWeightliftingById(this.idWei)
      .subscribe((data: Weightlifting) => {
        this.weightlifting = data;
      });
  }

  fetchRecords(){
    this.recordWeiService
      .getRecordWeiByUserWeiId(this.idUser, this.idWei)
      .subscribe((data: RecordWei[]) => {
        this.recordWei = data;
        this.getData();
      });
  }

  getData(){
    let i =0;
    for(let rec of this.recordWei){
      this.data[i] = rec.record;
      this.label[i] = rec.date.toString();
      i++;
    }
    this.recordData[0].data = this.data;
    this.recordLabels = this.label;
  }

  openDialog(id, name): void {
    let dialo = this.dialog.open(DialogRecordWeiComponent);
    dialo.componentInstance.idWei = id;
    dialo.componentInstance.name = name;
    dialo.afterClosed().subscribe(() => {
      this.fetchRecords();
      window.location.reload();
    })
  }

  openDialogMod(record): void {
    let dialo = this.dialog.open(DialogModifyRecordWeiComponent);
    dialo.componentInstance.recordWei = record;
    this.getData();
    dialo.afterClosed().subscribe(() => {
      this.fetchRecords();
      window.location.reload();
    })
  }

  deleteRecordWei(id){
    this.recordWeiService.deleteRecordWei(id).subscribe(() => {
      this.fetchRecords();
      window.location.reload();
    });
  }

}
