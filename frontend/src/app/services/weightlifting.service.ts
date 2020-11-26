import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeightliftingService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  getWeightliftings() {
    return this.http.get(`${this.uri}/weightliftings`);
  }

  getWeightliftingById(id) {
    return this.http.get(`${this.uri}/weightliftings/${id}`);
  }

  addWeightlifting(name) {
    const weightlifting = {
      name: name
    };
    return this.http.post(`${this.uri}/weightliftings/add`, weightlifting)
  }

  updateWeightlifting(id, name) {
    const weightlifting = {
      name: name,
    };
    return this.http.post(`${this.uri}/weightliftings/update/${id}`, weightlifting)
  }

  deleteWeightlifting(id){
    return this.http.get(`${this.uri}/weightliftings/delete/${id}`);
  }
}
