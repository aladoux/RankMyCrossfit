import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecordWod } from './recordWod.model';

@Injectable({
  providedIn: 'root'
})
export class RecordWodService {
  selectedRecordWod: RecordWod = {
    _id: '',
  idUser: '',
  idWod: '',
  name: '',
  record: 0,
  state: '',
  date: new Date(),
  sexe: '',
  nameUs: ''
  };

  uri = 'http://localhost:4000/rankmycrossfit';

  constructor(private http: HttpClient) { }

  getRecordWod() {
    return this.http.get(`${this.uri}/recordWod`);
  }

  getRecordWomanPublic(id){
    return this.http.get(`${this.uri}/recordWod/publicwoman/${id}`)
  }

  getRecordManPublic(id) {
    return this.http.get(`${this.uri}/recordWod/publicman/${id}`);
  }

  getRecordWodById(id) {
    return this.http.get(`${this.uri}/recordWod/${id}`);
  }

  getRecordWodByUserId(id) {
    return this.http.get(`${this.uri}/myRecordsWod/${id}`);
  }

  addRecordWod(idUser, idWod,name, record, state, date, sexe, nameUs) {
    const recordWod = {
      idUser: idUser,
      idWod: idWod,
      name: name,
      record: record,
      state: state,
      date: date,
      sexe: sexe,
      nameUs: nameUs
    };
    return this.http.post(`${this.uri}/recordWod/add`, recordWod)
  }

  updateRecordWod(id,record, state, date) {
    const recordWod = {
      record: record,
      state: state,
      date: date
    };
    return this.http.post(`${this.uri}/recordWod/update/${id}`, recordWod)
  }

  deleteRecordWod(id){
    return this.http.get(`${this.uri}/recordWod/remove/${id}`);
  }
}
