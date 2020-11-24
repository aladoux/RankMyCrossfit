import { Component,Input, OnInit } from '@angular/core';
import {WodService} from '../wod.service'
import {Router} from '@angular/router'
import {Wod} from '../wod.model';



@Component({
  selector: 'app-listewod',
  templateUrl: './listewod.component.html',
  styleUrls: ['./listewod.component.scss']
})
export class ListewodComponent implements OnInit {

  wods: Wod[];
  displayedColumns = ['name', 'exercises'];

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


}
