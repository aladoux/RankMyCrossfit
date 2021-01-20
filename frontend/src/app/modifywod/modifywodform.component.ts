import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup ,ReactiveFormsModule , FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import {WodService} from '../shared/wod.service';
import {ActivatedRoute} from '@angular/router';
import {Wod} from '../shared/wod.model';
import {Exercise} from '../shared/exercise.model';
import {Weightlifting} from '../shared/weightlifting.model';
import {WeightliftingService} from '../shared/weightlifting.service';
import {HttpClient} from '@angular/common/http';
import {ExerciceApi} from '../shared/exerciceApi.model';



@Component({
  selector: 'app-modifywodform',
  styleUrls: ['./modifywodform.component.scss'],
  templateUrl: './modifywodform.component.html'
})
export class ModifyWodFormComponent implements OnInit{
  apiUrl = "https://wger.de/api/v2/exercise.json/";
  weightliftings: Weightlifting[]; // tab des mouv weight
  unities = ["kilometers", "repetitions", "minutes", "seconds", "calories"];
  exoApi; //json des mouv api
  exoApiNames: String[]= [];
  productForm: FormGroup;
  exercices : ExerciceApi[] = [];
  id: String;
  wod: Wod;
  exos: Exercise[] = [];

constructor(private _http: HttpClient,private fb:FormBuilder,private weightliftingService: WeightliftingService, private wodService: WodService, private route: Router, private router: ActivatedRoute) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      exercises: this.fb.array([]) ,
    });
  }

ngOnInit(): void {
  this.router.params.subscribe(params => {
    this.id = params['id'];
    });
    this.fetchWeightliftings();
    this.fetchExoApi();


}

ngAfterViewInit(){
  this.fetchWod();
}

exercises() : FormArray {
    return this.productForm.get("exercises") as FormArray
  }

onBack(){
  this.route.navigate(['/wods']);
}




fetchWeightliftings(){
  this.weightliftingService
    .getWeightliftings()
    .subscribe((data: Weightlifting[]) => {
      this.weightliftings = data;
      //console.log(this.weightliftings);
      for(let i=0;i<this.weightliftings.length;i++){
        const exercice : ExerciceApi = {name: this.weightliftings[i].name, desc: this.weightliftings[i].desc};
        this.exercices.push(exercice);
      }
      //console.log(this.exercices);
    });
}

fetchExoApi(){
  this._http.get(this.apiUrl).subscribe(res => {
    this.exoApi = JSON.stringify(res);
    const exoApiParse = JSON.parse(this.exoApi);
    const exoApiResults = exoApiParse.results;
    //console.log(exoApiResults);
    for(let i=0;i<exoApiResults.length;i++){
      const exercice : ExerciceApi = {name: exoApiResults[i].name, desc: exoApiResults[i].description};
      this.exercices.push(exercice);
    }
    //console.log(this.exercices);
  });

}

fetchWod(){
    this.wodService
      .getWodById(this.id)
      .subscribe((data: Wod) => {
        this.wod = data;
        this.exos = data.exercises;
        //console.log("dede",this.exos);
        for(let ex of this.exos){
          const exo : ExerciceApi = {name: ex.objectExo.name, desc: ex.objectExo.desc};
          this.exercises().push(this.existExercise(JSON.stringify(exo), ex.quantity,ex.listeUnit,ex.weight));
          console.log("dede",typeof exo);
        }
        console.log("dede",typeof this.exercices[0]);
        //console.log("coucou",this.exercices);
      });
  }

  existExercise(objectExo, quantity, unit, wei): FormGroup {
    return this.fb.group({
      objectExo: objectExo,
      quantity: quantity,
      listeUnit: unit,
      weight: wei,
    })
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

  onModifyWod() {
    for(let exo of (this.productForm.value.exercises)){
      exo.objectExo = JSON.parse(exo.objectExo);
    }
    this.wodService.updateWod(this.id,this.productForm.value.name, this.productForm.value.exercises).subscribe(() => {
      this.route.navigate(['/wods']);
    });
    //console.log(this.productForm.value);
  }
}
