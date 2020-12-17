import { Component, OnInit } from '@angular/core';
import { RecordWeiService } from '../services/recordWei.service';
import {UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';;


@Component({
  selector: 'app-dialog-record-wei',
  templateUrl: './dialog-record-wei.component.html',
  styleUrls: ['./dialog-record-wei.component.scss']
})
export class DialogRecordWeiComponent implements OnInit {
  userDetails;
  idWei : String;

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res['user'];
      },
      err =>{}
    );
  }

  constructor(private routeAc: ActivatedRoute,private router: Router,private userService: UserService,private recordWeiService: RecordWeiService) { }



  addRecord(){

    //console.log(this.userDetails._id);
    console.log(this.idWei);
    /*this.recordWeiService.addRecordWei(this.userDetails._id, ,).subscribe(() => {
      this.router.navigate(['/weightliftings']);
    });*/
    //console.log(this.productForm.value);
  }

}
