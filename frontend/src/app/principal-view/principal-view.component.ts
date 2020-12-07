import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.scss']
})
export class PrincipalViewComponent implements OnInit {

  isAuth = false;
  idUtili = null;
  username = 'titi';

  constructor() { }

  ngOnInit(){

  }

}
