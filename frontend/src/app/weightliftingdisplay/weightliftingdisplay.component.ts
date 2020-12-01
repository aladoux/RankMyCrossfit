import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {WeightliftingService} from '../services/weightlifting.service'
import {Router} from '@angular/router'
import {ActivatedRoute} from '@angular/router';
import {Weightlifting} from '../weightlifting.model';



@Component({
  selector: 'app-woddisplay',
  templateUrl: './weightliftingdisplay.component.html',
  styleUrls: ['./weightliftingdisplay.component.scss']
})

export class WeightliftingDisplayComponent implements OnInit {
  weightlifting: Weightlifting;
  id: String;
  constructor(private weightliftingService: WeightliftingService, private router: ActivatedRoute) { }

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
}
