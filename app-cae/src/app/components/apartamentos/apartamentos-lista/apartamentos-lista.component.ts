import { Component, OnInit } from '@angular/core';
import { Apartamento } from 'src/app/classes/apartamento';
import { ApartamentoService } from 'src/app/services/apartamento.service';

@Component({
  selector: 'app-apartamentos-lista',
  templateUrl: './apartamentos-lista.component.html',
  styleUrls: ['./apartamentos-lista.component.css']
})
export class ApartamentosListaComponent implements OnInit{

  constructor(private service: ApartamentoService) { }

  apartamentos : Apartamento[] = [];

  listarApartamentos() : void{
    this.service.getApartamentosApi().subscribe(resposta => this.apartamentos = resposta);
  }
  ngOnInit(): void {
    this.listarApartamentos();
  }
}
