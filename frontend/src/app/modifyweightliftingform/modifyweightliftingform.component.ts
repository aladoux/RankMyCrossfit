import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,ReactiveFormsModule , FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import {WeightliftingService} from '../services/weightlifting.service';
import {ActivatedRoute} from '@angular/router';
import {Weightlifting} from '../weightlifting.model';



@Component({
  selector: 'app-modifyweightliftingform',
  styleUrls: ['./modifyweightliftingform.component.scss'],
  templateUrl: './modifyweightliftingform.component.html'
})
export class ModifyWeightliftingFormComponent implements OnInit{
  weightlifting: Weightlifting;
  id: String;
  productForm: FormGroup;


onBack(){
  this.route.navigate(['/weightliftings']);
}

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.id = params['id'];
      });
     this.fetchWeightlifting();
  }


  constructor(private fb:FormBuilder, private weightliftingService: WeightliftingService,private route: Router, private router: ActivatedRoute) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      desc: [''],
      tips: ['']
    });
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

  onModifyWeightlifting() {
    this.weightliftingService.updateWeightlifting(this.id,this.productForm.value.name, this.productForm.value.desc,this.productForm.value.tips).subscribe(() => {
      this.route.navigate(['/weightliftings']);
    });

  }
}
