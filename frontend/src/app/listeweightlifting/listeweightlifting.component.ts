import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {WeightliftingService} from '../services/weightlifting.service'
import {Router} from '@angular/router'
import {Weightlifting} from '../weightlifting.model';



@Component({
  selector: 'app-listeweightlifting',
  templateUrl: './listeweightlifting.component.html',
  styleUrls: ['./listeweightlifting.component.scss']
})
export class ListeweightliftingComponent implements OnInit {


  weightliftings: Weightlifting[];
  displayedColumns = ['name'];
  weightliftingname = "";

  constructor(private weightliftingService: WeightliftingService, private router: Router) { }

  ngOnInit(){
    this.fetchWeightliftings();
  }

  fetchWeightliftings(){
    this.weightliftingService
      .getWeightliftings()
      .subscribe((data: Weightlifting[]) => {
        this.weightliftings = data;
        console.log('Data requested ...');
        console.log(this.weightliftings);
      });
  }

  editWeightlifting(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteWeightlifting(id){
    this.weightliftingService.deleteWeightlifting(id).subscribe(() => {
      this.fetchWeightliftings();
    });
  }

  Search(){
    if(this.weightliftingname != ""){
      this.weightliftings = this.weightliftings.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.weightliftingname.toLocaleLowerCase());
      })
    }
    else if(this.weightliftingname == ""){
      this.ngOnInit();
    }

  }
}
