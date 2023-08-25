import { Component, OnInit } from '@angular/core';
import { Proprietario } from 'src/app/classes/proprietario';
import { ProprietariosService } from 'src/app/services/proprietarios.service';

@Component({
  selector: 'app-proprietarios-lista',
  templateUrl: './proprietarios-lista.component.html',
  styleUrls: ['./proprietarios-lista.component.css']
})

export class ProprietariosListaComponent implements OnInit{

  constructor(private service: ProprietariosService) { }

  ngOnInit(): void {
    this.listar();
  }

  proprietarios: any[] = []; // Altere o tipo para any[]

  listar(): void {
    this.service.getProprietariosApi().subscribe(resposta => this.proprietarios = resposta);
  }
}