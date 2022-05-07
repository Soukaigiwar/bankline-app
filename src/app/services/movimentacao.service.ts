import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseURL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(`${baseURL}/movimentacoes`);
  }
  findByIdConta(idConta:any): Observable<any> {
    return this.http.get(`${baseURL}/movimentacoes/${idConta}`);
  }
  create(movimentacao:any): Observable<any> {
    return this.http.post(`${baseURL}/movimentacoes`, movimentacao);
  }
}
