import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecordWei } from './recordWei.model';

@Injectable({
  providedIn: 'root'
})
export class RecordWeiService {
  selectedRecordWei: RecordWei = {
  idUser: '',
  idWei: '',
  record: 0,
  state: ''
  };

  uri = 'http://localhost:4000/rankmycrossfit';

  constructor(private http: HttpClient) { }

  getRecordWei() {
    return this.http.get(`${this.uri}/recordWei`);
  }

  getRecordWeiById(id) {
    return this.http.get(`${this.uri}/recordWei/${id}`);
  }

  addRecordWei(idUser, idWei, record, state) {
    const recordWei = {
      idUser: idUser,
      idWei: idWei,
      record: record,
      state: state
    };
    return this.http.post(`${this.uri}/recordWei/add`, recordWei)
  }

  updateRecordWei(id,record) {
    const recordWei = {
      record: record
    };
    return this.http.post(`${this.uri}/recordWei/update/${id}`, recordWei)
  }

  deleteRecordWei(id){
    return this.http.get(`${this.uri}/recordWei/remove/${id}`);
  }
}
