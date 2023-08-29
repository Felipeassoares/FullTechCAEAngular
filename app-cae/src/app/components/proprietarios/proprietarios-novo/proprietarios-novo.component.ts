import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proprietario } from 'src/app/classes/proprietario';
import { Apartamento } from 'src/app/classes/apartamento';
import { ProprietariosService } from 'src/app/services/proprietarios.service';

@Component({
  selector: 'app-proprietarios-novo',
  templateUrl: './proprietarios-novo.component.html',
  styleUrls: ['./proprietarios-novo.component.css']
})
export class ProprietariosNovoComponent implements OnInit {
  constructor(
    private router: Router,
    private service: ProprietariosService) { }

  ngOnInit(): void {
    this.carregarApartamentosDisponiveis();
  }

  apartamentosDisponiveis: Apartamento[] = [];
  proprietario: Proprietario = new Proprietario();
  apartamentoSelecionado: number | undefined; 

  carregarApartamentosDisponiveis(): void {
    this.service.getApartamentosDisponiveis().subscribe(apartamentos => {
      this.service.getProprietariosApi().subscribe(proprietarios => {
        this.apartamentosDisponiveis = apartamentos.filter(apart => {
          return !proprietarios.some(prop => prop.apartamento === apart.id);
        });
      });
    });
  }

  fechar(): void {
    this.router.navigate(['proprietarios']);
  }

  incluir(proprietario: Proprietario): void {
    if (this.apartamentoSelecionado !== undefined) {
      proprietario.apartamento = this.apartamentoSelecionado;
    }
  
    proprietario.dtNascimento.replace('/', '-');
    this.service.postProprietarioApi(proprietario)
      .subscribe({
        complete: () => this.fechar(),
        error: erro => {
           console.error(erro);
           window.alert(erro);
        }
      });
  }
}
