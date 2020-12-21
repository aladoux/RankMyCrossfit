import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import {WodService} from '../shared/wod.service';
import {WeightliftingService} from '../shared/weightlifting.service';
import {Weightlifting} from '../shared/weightlifting.model';


@Component({
  selector: 'app-addwodform',
  styleUrls: ['./addwodform.component.scss'],
  templateUrl: './addwodform.component.html'
})
export class AddWodFormComponent implements OnInit{
  weightliftings: Weightlifting[];
  productForm: FormGroup;

  constructor(private fb:FormBuilder,private weightliftingService: WeightliftingService, private wodService: WodService, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      exercises: this.fb.array([]) ,

    });
  }

  onBack(){
    this.router.navigate(['/wods']);
  }


  ngOnInit(): void {
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



  exercises() : FormArray {
    return this.productForm.get("exercises") as FormArray
  }

  newExercise(): FormGroup {
    return this.fb.group({
      exoName: ['', Validators.required],
      list:[''],
      weight: '',
      nbOfRep: '',
      time: '',
      kcal: '',
      distance: '',
      type: 's' //s for simple
    })
  }

  newExistingWeightlifting(): FormGroup {
    return this.fb.group({
      exoName:['',],
      list:'',
      weight: '',
      nbOfRep: '',
      time: '',
      kcal: '',
      distance: '',
      type: 'cw', //cw for created weightlifting
    })
  }

  addExercise() {
    this.exercises().push(this.newExercise());
  }

  addExistingWeightlifting() {

    this.exercises().push(this.newExistingWeightlifting());
  }

  removeExercise(i:number) {
    this.exercises().removeAt(i);
  }

  onAddWod() {
    this.wodService.addWod(this.productForm.value.name, this.productForm.value.exercises).subscribe(() => {
      this.router.navigate(['/wods']);
    });
    console.log(this.productForm.value);
  }
}
