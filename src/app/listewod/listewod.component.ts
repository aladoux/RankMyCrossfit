import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listewod',
  templateUrl: './listewod.component.html',
  styleUrls: ['./listewod.component.scss']
})
export class ListewodComponent implements OnInit {

  @Input() wodName: string;
  @Input() status: string;
  constructor() { }

  ngOnInit(): void {
  }

  getColor(){
    if(this.status ==="allumé"){
      return "green";
    }
    else{
      return "red";
    }
  }
}
