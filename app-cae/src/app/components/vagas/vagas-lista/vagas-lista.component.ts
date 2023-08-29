import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/classes/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vagas-lista',
  templateUrl: './vagas-lista.component.html',
  styleUrls: ['./vagas-lista.component.css']
})
export class VagasListaComponent implements OnInit {
  constructor(private service: VagaService) { }

  vagas : Vaga[] = [];

  listarVagas() : void{
    this.service.getVagasApi().subscribe(resposta => this.vagas = resposta);
  }

  ngOnInit(): void {
    this.listarVagas();
  }
}