import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {WodService} from '../shared/wod.service'
import {Router} from '@angular/router'
import {Wod} from '../shared/wod.model';
import {UserService} from '../shared/user.service';




@Component({
  selector: 'app-listewod',
  templateUrl: './listewod.component.html',
  styleUrls: ['./listewod.component.scss']
})
export class ListewodComponent implements OnInit {


  wods: Wod[];
  displayedColumns = ['name'];
  wodname = "";
  token = "";
  user;

  constructor(private wodService: WodService, private router: Router, private userService: UserService) { }

  ngOnInit(){
    this.fetchWods();
    this.token = this.userService.getToken();
    this.userService.getUserProfile().subscribe(
      res =>{
        this.user = res['user'];
      },
      err =>{}
    );
  }

  fetchWods(){
    this.wodService
      .getWods()
      .subscribe((data: Wod[]) => {
        this.wods = data;
      });
  }

  editWod(id) {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteWod(id){
    this.wodService.deleteWod(id).subscribe(() => {
      this.fetchWods();
    });
  }

  Search(){
    if(this.wodname != ""){
      this.wods = this.wods.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.wodname.toLocaleLowerCase());
      })
    }
    else if(this.wodname == ""){
      this.ngOnInit();
    }

  }
}
