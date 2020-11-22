import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wods',
  templateUrl: './wods.component.html',
  styleUrls: ['./wods.component.scss']
})
export class WodsComponent implements OnInit {

  wods=[{name: "murph",status: "allumé"},{name:"lidia",status:"eteint"}];

  datelast = new Promise(
    (resolve, reject)=>{
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  })

  constructor() { }

  ngOnInit(): void {
  }

}
