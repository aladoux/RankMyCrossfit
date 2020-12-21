import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {WeightliftingService} from '../shared/weightlifting.service'
import {Router} from '@angular/router'
import {Weightlifting} from '../shared/weightlifting.model';
import {UserService} from '../shared/user.service';


@Component({
  selector: 'app-listeweightlifting',
  templateUrl: './listeweightlifting.component.html',
  styleUrls: ['./listeweightlifting.component.scss']
})
export class ListeweightliftingComponent implements OnInit {


  weightliftings: Weightlifting[];
  displayedColumns = ['name'];
  weightliftingname = "";
  token = "";

  constructor(private weightliftingService: WeightliftingService, private router: Router, private userService: UserService) { }

  ngOnInit(){
    this.fetchWeightliftings();
    this.token = this.userService.getToken();
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
