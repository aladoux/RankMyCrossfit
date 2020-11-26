import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import {WeightliftingService} from '../services/weightlifting.service';


@Component({
  selector: 'app-addwodform',
  styleUrls: ['./addweightliftingform.component.scss'],
  templateUrl: './addweightliftingform.component.html'
})
export class AddWeightliftingFormComponent implements OnInit{

  onBack(){

  }


  ngOnInit(): void {
  }

  productForm: FormGroup;

  constructor(private fb:FormBuilder, private weightliftingService: WeightliftingService, private router: Router) {

    this.productForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onAddWeightlifting() {
    this.weightliftingService.addWeightlifting(this.productForm.value.name).subscribe(() => {
      this.router.navigate(['/weightliftings']);
    });
    console.log(this.productForm.value);
  }
}
