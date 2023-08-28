import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veiculo } from '../classes/veiculo';
import { Observable } from 'rxjs';

@Injectable()
export class VeiculoService {

  constructor(private http: HttpClient) { }

  baseUrl : string = "http://localhost:8080/api/veiculos/"

    // lista de todos os veiculos
    public getVeiculosApi() : Observable<Veiculo[]> {
      return this.http.get<Veiculo[]>(this.baseUrl);
    }  

    public getVeiculoApi(placa: string) : Observable<Veiculo> {
      const url = `${this.baseUrl}${placa}`;
      return this.http.get<Veiculo>(url);
    }
  
  
    // inclusão de um novo veiculo
    public postVeiculoApi(veiculo: Veiculo) : Observable<Veiculo> {
      return this.http.post<Veiculo>(this.baseUrl, veiculo);
    }
  
    
  // alteracao de veiculo
  public putVeiculoApi(veiculo: Veiculo, placa: string): Observable<Veiculo>{
    const url = `${this.baseUrl}${placa}`;
    return this.http.put<Veiculo>(url, veiculo);
  }  

  //remoção do veiculo
  public deleteVeiculoApi(placa: string): Observable<string> {
    const url = `${this.baseUrl}${placa}`;
    return this.http.delete<string>(url);
  }
}
