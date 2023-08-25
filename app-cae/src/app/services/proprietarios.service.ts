import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprietario } from '../classes/proprietario';
import { HttpClient } from '@angular/common/http';
import { Apartamento } from '../classes/apartamento';

@Injectable()
export class ProprietariosService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/api/proprietarios/";

  public getApartamentosDisponiveis(): Observable<Apartamento[]> {
    return this.http.get<Apartamento[]>(this.baseUrl + 'apartamentos/disponiveis');
}
  
  public getProprietariosApi(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  //inclusão de produto
  public postProprietarioApi(proprietario: Proprietario): Observable<Proprietario> {
    return this.http.post<Proprietario>(this.baseUrl, proprietario);
  }

}
