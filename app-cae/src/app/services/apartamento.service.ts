import { Injectable } from '@angular/core';
import { Apartamento } from '../classes/apartamento';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable()
export class ApartamentoService {

  constructor(private http: HttpClient) { }

  baseUrl : string = 'http://localhost:8080/api/apartamentos/';

  
  public getApartamentosApi() : Observable<Apartamento[]> {
    return this.http.get<Apartamento[]>(this.baseUrl);
  }

  public getApartamentoApi(id: number) : Observable<Apartamento> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<Apartamento>(url);
  }

  public postApartamentoApi(apartamento: Apartamento) : Observable<Apartamento> {
    return this.http.post<Apartamento>(this.baseUrl, apartamento);
  }

  public putApartamentoApi(apartamento: Apartamento, id: number): Observable<String> {
  const url = `${this.baseUrl}${id}`;
  return this.http.put<String>(url, apartamento);
  }

  public deleteApartamento(id: number) : Observable<number> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<number>(url);
  }

}
