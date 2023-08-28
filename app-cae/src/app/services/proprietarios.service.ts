import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proprietario } from '../classes/proprietario';
import { Apartamento } from '../classes/apartamento';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProprietariosService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:8080/api/proprietarios/";

  public getApartamentosDisponiveis(): Observable<Apartamento[]> {
    const url = "http://localhost:8080/api/apartamentos/";
    return this.http.get<Apartamento[]>(url);
  }

  public getProprietariosApi() : Observable<Proprietario[]> {
    return this.http.get<Proprietario[]>(this.baseUrl);
  }

  public getProprietarioApi(cpf: string) : Observable<Proprietario> {
    const url = `${this.baseUrl}${cpf}`;
    return this.http.get<Proprietario>(url);
  }

  public postProprietarioApi(proprietario: Proprietario): Observable<Proprietario> {
    return this.http.post<Proprietario>(this.baseUrl, proprietario);
  }
  
}
