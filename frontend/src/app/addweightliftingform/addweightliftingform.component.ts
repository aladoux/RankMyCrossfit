import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import {WeightliftingService} from '../shared/weightlifting.service';


@Component({
  selector: 'app-addweightliftingform',
  styleUrls: ['./addweightliftingform.component.scss'],
  templateUrl: './addweightliftingform.component.html'
})
export class AddWeightliftingFormComponent implements OnInit{

  onBack(){
    this.router.navigate(['/weightliftings']);
  }


  ngOnInit(): void {
  }

  productForm: FormGroup;

  constructor(private fb:FormBuilder, private weightliftingService: WeightliftingService, private router: Router) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      desc: ['']
    });
  }


  onAddWeightlifting() {
    this.weightliftingService.addWeightlifting(this.productForm.value.name, this.productForm.value.desc).subscribe(() => {
      this.router.navigate(['/weightliftings']);
    });
  }
}
