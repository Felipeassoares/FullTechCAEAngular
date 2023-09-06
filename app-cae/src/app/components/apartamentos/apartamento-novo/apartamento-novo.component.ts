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
  resposta!: string;
  estilo!: string;

    
  fechar() : void{
    this.router.navigate(['apartamentos']);
  }

  incluir(apartamento: Apartamento) : void {
    if (apartamento.numero == null || apartamento.numero == undefined || apartamento.numero == '') {
      this.resposta = 'O numero do apartamento deve ser informado.';
      this.estilo = "alert alert-danger";
      return;
    }

    if (apartamento.bloco == null || apartamento.bloco == undefined || apartamento.bloco == '') {
      this.resposta = 'O bloco do apartamento deve ser informado.';
      this.estilo = "alert alert-danger";

       return;
     }

     if (apartamento.qndvagas <= 0) {
      this.resposta = 'A quantidade de vagas do apartamento deve ser maior que zero.';
      this.estilo = "alert alert-danger";
       return;
     }     

    this.service.postApartamentoApi(apartamento)
    .subscribe({
      complete: () => this.fechar(),
      error: erro => {
        console.error(erro);
        window.alert(erro);
      }
    });
  }
  apExistente: boolean = false;
  validarApartamento(): void {
    this.service.getApartamentosApi().subscribe(ap => {
      this.apExistente = ap.some(v => (v.numero === this.apartamento.numero) && (v.bloco === this.apartamento.bloco));
    });
  }  


}

