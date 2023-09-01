import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../classes/vaga';
import { Apartamento } from '../classes/apartamento';

@Injectable()
export class VagaService {

  constructor(private http: HttpClient) { }

  baseUrl : string = 'http://localhost:8080/api/vagas/';

  public getApartamentosVagaDisponiveis(): Observable<Apartamento[]> {
    const url = "http://localhost:8080/api/apartamentos/";
    return this.http.get<Apartamento[]>(url);
  }

  public getVagasApi() : Observable<Vaga[]> {
    return this.http.get<Vaga[]>(this.baseUrl);
  }

  public getVagaApi(id: number) : Observable<Vaga> {
    const url = `${this.baseUrl}${id}`;
    return this.http.get<Vaga>(url);
  }

  public postVagaApi(vaga: Vaga) : Observable<Vaga> {
    return this.http.post<Vaga>(this.baseUrl, vaga);
  }

  public putVagaApi(vaga: Vaga, id: number): Observable<Vaga> {
  const url = `${this.baseUrl}${id}`;
  return this.http.put<Vaga>(url, vaga);
  }

  public deleteVaga(id: number) : Observable<number> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<number>(url);
  }
}
