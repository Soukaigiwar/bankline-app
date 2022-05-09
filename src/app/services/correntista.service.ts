import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//const baseURL = 'http://localhost:8080';
const baseURL = 'https://shenriqu-bankline-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    return this.http.get(`${baseURL}/correntistas`);
  }
  create(correntista:any): Observable<any> {
    return this.http.post(`${baseURL}/correntistas`,correntista);
  }
}
