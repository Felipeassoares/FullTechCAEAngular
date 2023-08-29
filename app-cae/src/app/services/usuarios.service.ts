import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../classes/usuario';
import { Observable } from 'rxjs';

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }
  baseUrl : string = "http://localhost:8080/api/usuarios/";

  // lista de todos os usuarios
  public getUsuariosApi() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }

  // inclusão de um novo usuario
  public postUsuarioApi(usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  // alteração de um usuario
  public putUsuarioApi(usuario: Usuario, id: number): Observable<Usuario> {
    const url = `${this.baseUrl}${id}`;
    return this.http.put<Usuario>(url, usuario);
  }  

  // remoção de usuario com base no id
  public deleteUsuario(id: number) : Observable<any> {
    const url = `${this.baseUrl}${id}`;
    return this.http.delete<any>(url);
  }

  listarOpcoesUsuarios() : String[] {
    return [
      'ADMINISTRADOR',
      'FUNCIONARIO',
      'MORADOR'
    ]
  }  


}
