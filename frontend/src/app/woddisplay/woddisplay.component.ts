import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {WodService} from '../services/wod.service'
import {ActivatedRoute} from '@angular/router';
import {Wod} from '../wod.model';
import { BrowserModule } from '@angular/platform-browser'
import {Exercise} from '../exercise.model';


@Component({
  selector: 'app-woddisplay',
  templateUrl: './woddisplay.component.html',
  styleUrls: ['./woddisplay.component.scss']
})

export class WodDisplayComponent implements OnInit {
  wod: Wod;
  exercises: Exercise[];
  id: String;
  constructor(private wodService: WodService, private router: ActivatedRoute) { }

  ngOnInit(){
   this.router.params.subscribe(params => {
    this.id = params['id'];
    });
   this.fetchWod();
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
}
