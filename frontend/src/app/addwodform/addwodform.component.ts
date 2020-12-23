import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import {WodService} from '../shared/wod.service';
import {WeightliftingService} from '../shared/weightlifting.service';
import {Weightlifting} from '../shared/weightlifting.model';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-addwodform',
  styleUrls: ['./addwodform.component.scss'],
  templateUrl: './addwodform.component.html'
})
export class AddWodFormComponent implements OnInit{
  apiUrl = "https://wger.de/api/v2/exercice/ -H 'Authorization: Token 6559b40ffd902842b597819d2316a8cc4030eba6'";
  weightliftings: Weightlifting[];
  unities = ["kilometers", "repetitions", "minutes", "seconds", "calories"];
  exoApi;
  productForm: FormGroup;

  constructor(private _http: HttpClient,private fb:FormBuilder,private weightliftingService: WeightliftingService, private wodService: WodService, private router: Router) {
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
    this.fetchExoApi();
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

  fetchExoApi(){
    this.exoApi = this._http.get(this.apiUrl);
    console.log(this.exoApi);
    //curl -X GET https://wger.de/api/v2/workout/ \-H 'Authorization: Token 6559b40ffd902842b597819d2316a8cc4030eba6';
  }



  exercises() : FormArray {
    return this.productForm.get("exercises") as FormArray
  }

  newExercise(): FormGroup {
    return this.fb.group({
      exoId: ['', Validators.required],
      type: 's',
      list:[''],
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
