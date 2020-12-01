import { Component,Input, OnInit, enableProdMode } from '@angular/core';
import {WodService} from '../services/wod.service'
import {Router} from '@angular/router'
import {Wod} from '../wod.model';




@Component({
  selector: 'app-listewod',
  templateUrl: './listewod.component.html',
  styleUrls: ['./listewod.component.scss']
})
export class ListewodComponent implements OnInit {


  wods: Wod[];
  displayedColumns = ['name'];
  wodname = "";

  constructor(private wodService: WodService, private router: Router) { }

  ngOnInit(){
    this.fetchWods();
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
