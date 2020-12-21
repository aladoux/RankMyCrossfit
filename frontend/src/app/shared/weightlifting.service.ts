import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeightliftingService {

  uri = 'http://localhost:4000/rankmycrossfit';

  constructor(private http: HttpClient) { }

  getWeightliftings() {
    return this.http.get(`${this.uri}/weightliftings`);
  }

  getWeightliftingById(id) {
    return this.http.get(`${this.uri}/weightliftings/${id}`);
  }

  addWeightlifting(name, desc, tips) {
    const weightlifting = {
      name: name,
      desc: desc,
      tips: tips
    };
    console.log(weightlifting.desc);
    console.log(weightlifting.tips);
    return this.http.post(`${this.uri}/weightliftings/add`, weightlifting)
  }

  updateWeightlifting(id, name, desc, tips) {
    const weightlifting = {
      name: name,
      desc: desc,
      tips: tips
    };
    return this.http.post(`${this.uri}/weightliftings/update/${id}`, weightlifting)
  }

  deleteWeightlifting(id){
    return this.http.get(`${this.uri}/weightliftings/remove/${id}`);
  }
}
