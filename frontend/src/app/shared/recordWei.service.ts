import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecordWei } from './recordWei.model';

@Injectable({
  providedIn: 'root'
})
export class RecordWeiService {
  selectedRecordWei: RecordWei = {
  _id: '',
  idUser: '',
  idWei: '',
  name: '',
  record: 0,
  state: '',
  date: new Date(),
  sexe: '',
  nameUs: ''
  };

  uri = 'http://localhost:4000/rankmycrossfit';

  constructor(private http: HttpClient) { }

  getRecordWei() {
    return this.http.get(`${this.uri}/recordWei`);
  }

  getRecordWomanPublic(id){
    return this.http.get(`${this.uri}/recordWei/publicwoman/${id}`)
  }

  getRecordManPublic(id) {
    return this.http.get(`${this.uri}/recordWei/publicman/${id}`);
  }

  getRecordWeiById(id) {
    return this.http.get(`${this.uri}/recordWei/${id}`);
  }

  getRecordWeiByUserId(id) {
    return this.http.get(`${this.uri}/myRecordsWei/${id}`);
  }

  getRecordWeiByUserWeiId(userId, weiId) {
    return this.http.get(`${this.uri}/recordWei/weightlifting/${userId}/${weiId}`);
  }

  addRecordWei(idUser, idWei, name,record, state, date, sexe, nameUs) {
    const recordWei = {
      idUser: idUser,
      idWei: idWei,
      name: name,
      record: record,
      state: state,
      date: date,
      sexe: sexe,
      nameUs: nameUs
    };
    return this.http.post(`${this.uri}/recordWei/add`, recordWei)
  }

  updateRecordWei(id,record,state, date) {
    const recordWei = {
      record: record,
      state: state,
      date: date
    };
    return this.http.post(`${this.uri}/recordWei/update/${id}`, recordWei)
  }

  deleteRecordWei(id){
    return this.http.get(`${this.uri}/recordWei/remove/${id}`);
  }
}
