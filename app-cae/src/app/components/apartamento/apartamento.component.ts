import { Component, OnInit } from '@angular/core';
import { Apartamento } from 'src/app/classes/apartamento';
import { ApartamentoService } from 'src/app/services/apartamento.service';

@Component({
  selector: 'app-apartamento',
  templateUrl: './apartamento.component.html',
  styleUrls: ['./apartamento.component.css']
})
export class ApartamentoComponent implements OnInit {

  constructor(private apartamentoService : ApartamentoService) { }
  ngOnInit(): void {
    this.listar();
   }
 
   apartamentos: Apartamento[] = [];
 
   listar() : void {
     this.apartamentos = this.apartamentoService.listarApartamentos();
   }
 
   filtrar(input: string) : void {
     this.listar();
  //    this.apartamentos = this.apartamentos.filter(
  //     //  a => a.id.(input.()));
   }
 }
 