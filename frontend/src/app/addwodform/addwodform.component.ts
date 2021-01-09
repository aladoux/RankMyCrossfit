import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import {WodService} from '../shared/wod.service';
import {WeightliftingService} from '../shared/weightlifting.service';
import {Weightlifting} from '../shared/weightlifting.model';
import {HttpClient} from '@angular/common/http';
import {Exercise} from '../shared/exercise.model';
import {ExerciceApi} from '../shared/exerciceApi.model';


@Component({
  selector: 'app-addwodform',
  styleUrls: ['./addwodform.component.scss'],
  templateUrl: './addwodform.component.html'
})
export class AddWodFormComponent implements OnInit{
  apiUrl = "https://wger.de/api/v2/exercise.json/";
  weightliftings: Weightlifting[] = []; // tab des mouv weight
  unities = ["kilometers", "repetitions", "minutes", "seconds", "calories"];
  exoApi; //json des mouv api
  exoApiNames: String[14];
  productForm: FormGroup;
  exercices : ExerciceApi[] = [];

  constructor(private _http: HttpClient,private fb:FormBuilder,private weightliftingService: WeightliftingService, private wodService: WodService, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      exercises: this.fb.array([]) ,

    });
  }

  exercises() : FormArray {
    return this.productForm.get("exercises") as FormArray
  }

  onBack(){
    this.router.navigate(['/wods']);
  }


  ngOnInit(): void {
    this.fetchWeightliftings();
    this.fetchExoApi();
  }


  fetchWeightliftings(){
    this.weightliftingService
      .getWeightliftings()
      .subscribe((data: Weightlifting[]) => {
        this.weightliftings = data;
        console.log(this.weightliftings);
        for(let i=0;i<this.weightliftings.length;i++){
          const exercice : ExerciceApi = {name: this.weightliftings[i].name, desc: this.weightliftings[i].desc};
          this.exercices.push(exercice);
        }
        console.log(this.exercices);
      });
  }

  fetchExoApi(){
    this._http.get(this.apiUrl).subscribe(res => {
      this.exoApi = JSON.stringify(res);
      const exoApiParse = JSON.parse(this.exoApi);
      const exoApiResults = exoApiParse.results;
      console.log(exoApiResults);
      for(let i=0;i<exoApiResults.length;i++){
        const exercice : ExerciceApi = {name: exoApiResults[i].name, desc: exoApiResults[i].description};
        this.exercices.push(exercice);
      }
      console.log(this.exercices);
    });

  }


  newExercise(): FormGroup {
    return this.fb.group({
      objectExo: ['', Validators.required],
      quantity: '',
      listeUnit: '',
      weight: '',
    })
  }

  addExercise() {
    this.exercises().push(this.newExercise());
  }


  removeExercise(i:number) {
    this.exercises().removeAt(i);
  }

  onAddWod() {
    for(let exo of (this.productForm.value.exercises)){
      exo.objectExo = JSON.parse(exo.objectExo);
    }
    //this.productForm.value.exercises[0].objectExo = JSON.parse((this.productForm.value.exercises[0].objectExo).objectExo);
    this.wodService.addWod(this.productForm.value.name, this.productForm.value.exercises).subscribe(() => {
      this.router.navigate(['/wods']);
    });
  }
}
