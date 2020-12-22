import { Component, OnInit } from '@angular/core';
import {UserService } from '../shared/user.service';
import {WeightliftingService} from '../shared/weightlifting.service'
import {Router} from '@angular/router';
import {Wod} from '../shared/wod.model';
import {WodService} from '../shared/wod.service'
import {Weightlifting} from '../shared/weightlifting.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  userDetails;
  wods: Wod[];
  weightliftings: Weightlifting[];
  displayedColumns = ['name'];
  wodname = "";
  weightliftingname = "";

  constructor(private userService: UserService, private router: Router,private wodService: WodService,private weightliftingService: WeightliftingService) { }

  ngOnInit(){
    this.fetchWods();
    this.fetchWeightliftings();
    this.userService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res['user'];
        console.log(this.userDetails);
      },
      err =>{}
    );
  }

  fetchWods(){
    this.wodService
      .getWods()
      .subscribe((data: Wod[]) => {
        this.wods = data;
        console.log('Data requested ...');
        console.log(this.wods);
      });
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

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  SearchWod(){
    if(this.wodname != ""){
      this.wods = this.wods.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.wodname.toLocaleLowerCase());
      })
    }
    else if(this.wodname == ""){
      this.ngOnInit();
    }

  }

  SearchWei(){
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
