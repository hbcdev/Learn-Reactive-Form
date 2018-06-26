import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',
  })
};
@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseURL = 'http://api.hbc.in.th/api/';
  constructor(private http: HttpClient) {


  }


  getData(url: any) {
    return this.http.get(this.baseURL + url);
  }
  editData(url: any, data: any) {
    return this.http.put(this.baseURL + url, data, httpOptions);
  }
  addData(url: any, data: any) {
    return this.http.post(this.baseURL + url, data, httpOptions);
  }
  delData(url: any) {
    return this.http.delete(this.baseURL + url, httpOptions);
  }


}
