import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordWeiService {

  uri = 'http://localhost:4000/rankmycrossfit';

  constructor(private http: HttpClient) { }

  getRecordWei() {
    return this.http.get(`${this.uri}/recordWei`);
  }

  getRecordWeiById(id) {
    return this.http.get(`${this.uri}/recordWei/${id}`);
  }

  addRecordWei(idUser, idWei, record) {
    const recordWei = {
      idUser: idUser,
      idWei: idWei,
      record: record
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
