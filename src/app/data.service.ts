import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
}
