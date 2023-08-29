import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})
export class VeiculosComponent {

  constructor(private router: Router) {}

  novoVeiculo() : void{
    this.router.navigate(['veiculos/novo']);
  }


}
