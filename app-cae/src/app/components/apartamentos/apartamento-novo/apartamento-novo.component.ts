import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartamento-novo',
  templateUrl: './apartamento-novo.component.html',
  styleUrls: ['./apartamento-novo.component.css']
})
export class ApartamentoNovoComponent {

  constructor(private router: Router) {}

  fechar() : void{
    this.router.navigate(['apartamentos']);
  }
}
