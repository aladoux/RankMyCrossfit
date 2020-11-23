import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-addwodform',
  styleUrls: ['./addwodform.component.scss'],
  templateUrl: './addwodform.component.html'
})
export class AddWodFormComponent implements OnInit{
  onAddWod(){
    alert('Wod added');
  }

  onBack(){

  }


  ngOnInit(): void {
  }

  productForm: FormGroup;

  constructor(private fb:FormBuilder) {

    this.productForm = this.fb.group({
      name: '',
      exercises: this.fb.array([]) ,
    });
  }

  exercises() : FormArray {
    return this.productForm.get("exercises") as FormArray
  }

  newExercise(): FormGroup {
    return this.fb.group({
      exoName: '',
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

  onSubmit() {
    console.log(this.productForm.value);
  }
}
