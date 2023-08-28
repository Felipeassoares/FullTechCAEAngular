import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Apartamento } from 'src/app/classes/apartamento';
import { ApartamentoService } from 'src/app/services/apartamento.service';

@Component({
  selector: 'app-apartamento-novo',
  templateUrl: './apartamento-novo.component.html',
  styleUrls: ['./apartamento-novo.component.css']
})
export class ApartamentoNovoComponent {

  constructor(
    private router: Router,
    private service: ApartamentoService) { }

    apartamento: Apartamento = new Apartamento();
    
  fechar() : void{
    this.router.navigate(['apartamentos']);
  }

  incluir(apartamento: Apartamento) : void {
    this.service.postApartamentoApi(apartamento)
    .subscribe({
      complete: () => this.fechar(),
      error: erro => {
        console.error(erro);
        window.alert(erro);
      }
    });
  }
}
