import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WodService {

  uri = 'http://localhost:4000/rankmycrossfit';

  constructor(private http: HttpClient) { }

  getWods() {
    return this.http.get(`${this.uri}/wods`);
  }

  getWodById(id) {
    return this.http.get(`${this.uri}/wods/${id}`);
  }

  addWod(name, exercises) {
    const wod = {
      name: name,
      exercises: exercises
    };
    return this.http.post(`${this.uri}/wods/add`, wod);
  }

  updateWod(id, name, exercises) {
    const wod = {
      name: name,
      exercises: exercises
    };
    return this.http.post(`${this.uri}/wods/update/${id}`, wod);
  }

  deleteWod(id){
    return this.http.get(`${this.uri}/wods/delete/${id}`);
  }
}
