import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/classes/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  constructor(private service: UsuariosService) { }

  usuarios : Usuario[] = [];

  listarUsuarios() : void {
    this.service.getUsuariosApi().subscribe(resposta => this.usuarios = resposta);
  }
  ngOnInit(): void {
    this.listarUsuarios();
  }

}