import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms'
import {WodService} from '../services/wod.service';


@Component({
  selector: 'app-addwodform',
  styleUrls: ['./addwodform.component.scss'],
  templateUrl: './addwodform.component.html'
})
export class AddWodFormComponent implements OnInit{

  onBack(){
    this.router.navigate(['/wods']);
  }


  ngOnInit(): void {
  }

  productForm: FormGroup;

  constructor(private fb:FormBuilder, private wodService: WodService, private router: Router) {

    this.productForm = this.fb.group({
      name: ['', Validators.required],
      exercises: this.fb.array([]) ,
    });
  }

  exercises() : FormArray {
    return this.productForm.get("exercises") as FormArray
  }

  newExercise(): FormGroup {
    return this.fb.group({
      exoName: ['', Validators.required],
      weight: '',
      nbOfRep: '',
      time: '',
      kcal: '',
      distance: '',
    })
  }

  addExercise() {
    this.exercises().push(this.newExercise());
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
