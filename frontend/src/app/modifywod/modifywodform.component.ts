import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,ReactiveFormsModule , FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import {WodService} from '../services/wod.service';
import {ActivatedRoute} from '@angular/router';
import {Wod} from '../wod.model';
import {Exercise} from '../exercise.model';



@Component({
  selector: 'app-modifywodform',
  styleUrls: ['./modifywodform.component.scss'],
  templateUrl: './modifywodform.component.html'
})
export class ModifyWodFormComponent implements OnInit{
  wod: Wod;
  exos: Exercise[];
  id: String;
  productForm: FormGroup;


onBack(){
  this.route.navigate(['/wods']);
}


ngOnInit(): void {
  this.router.params.subscribe(params => {
    this.id = params['id'];
    });
   this.fetchWod();
}

fetchWod(){
    this.wodService
      .getWodById(this.id)
      .subscribe((data: Wod) => {
        this.wod = data;
        this.exos = data.exercises;
        console.log('Data requested ...');
        console.log(this.wod);
        for(let ex of this.exos){
          this.exercises().push(this.existExercise(ex.exoName, ex.weight, ex.nbOfRep, ex.time, ex.kcal, ex.distance));
        }
      });
  }


  constructor(private fb:FormBuilder, private wodService: WodService,private route: Router, private router: ActivatedRoute) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      exercises: this.fb.array([]) ,
    });
  }

  exercises() : FormArray {
    return this.productForm.get("exercises") as FormArray
  }

  existExercise(exoN, wei, nbOfR, tim, kcal, distance): FormGroup {
    return this.fb.group({
      exoName: [exoN, Validators.required],
      weight: wei,
      nbOfRep: nbOfR,
      time: tim,
      kcal: kcal,
      distance: distance,
    })
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

  onModifyWod() {
    this.wodService.updateWod(this.id,this.productForm.value.name, this.productForm.value.exercises).subscribe(() => {
      this.route.navigate(['/wods']);
    });
    console.log(this.productForm.value);
  }
}
