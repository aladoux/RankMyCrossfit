import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RecordWod } from './recordWod.model';

@Injectable({
  providedIn: 'root'
})
export class RecordWodService {
  selectedRecordWod: RecordWod = {
  idUser: '',
  idWod: '',
  record: 0,
  state: ''
  };

  uri = 'http://localhost:4000/rankmycrossfit';

  constructor(private http: HttpClient) { }

  getRecordWod() {
    return this.http.get(`${this.uri}/recordWod`);
  }

  getRecordWodById(id) {
    return this.http.get(`${this.uri}/recordWod/${id}`);
  }

  addRecordWod(idUser, idWod, record, state) {
    const recordWod = {
      idUser: idUser,
      idWod: idWod,
      record: record,
      state: state
    };
    return this.http.post(`${this.uri}/recordWod/add`, recordWod)
  }

  updateRecordWod(id,record) {
    const recordWod = {
      record: record
    };
    return this.http.post(`${this.uri}/recordWod/update/${id}`, recordWod)
  }

  deleteRecordWod(id){
    return this.http.get(`${this.uri}/recordWod/remove/${id}`);
  }
}
