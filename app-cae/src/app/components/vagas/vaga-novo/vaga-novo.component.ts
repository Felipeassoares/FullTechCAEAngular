import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartamento } from 'src/app/classes/apartamento';
import { Vaga } from 'src/app/classes/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga-novo',
  templateUrl: './vaga-novo.component.html',
  styleUrls: ['./vaga-novo.component.css']
})
export class VagaNovoComponent implements OnInit {
  constructor(
    private router: Router,
    private service: VagaService) { }

  ngOnInit(): void {
    this.carregarApartamentosDisponiveis();
  }

  apartamentosDisponiveis: Apartamento[] = [];
  vaga: Vaga = new Vaga();

  carregarApartamentosDisponiveis(): void {
    this.service.getApartamentosVagaDisponiveis().subscribe(apartamentos => {
      this.service.getVagasApi().subscribe(vagas => {
        this.apartamentosDisponiveis = apartamentos.filter(apartamento => {
          const maxVagasApt = apartamento.qndvagas; //verfica o numero máximo de vagas do apartamento
          const vagasDispApt = vagas.filter( //valida quantas vagas tem disponivel
            vaga => vaga.apartamento === apartamento.id).length;
          return vagasDispApt < maxVagasApt;
        });
      });
    });
  }

  vagaExistente: boolean = false;

  validarVaga(): void {
    this.service.getVagasApi().subscribe(vagas => {
      this.vagaExistente = vagas.some(v => v.numero === this.vaga.numero);
    });
  }

  fechar(): void {
    this.router.navigate(['vagas']);
  }

  incluir(vaga: Vaga): void {
    if (this.vaga.idAP !== undefined) {
      vaga.idAP = this.vaga.idAP;
    }

    this.service.postVagaApi(vaga)
      .subscribe({
        complete: () => this.fechar(),
        error: erro => {
          console.error(erro);
          window.alert(erro);
        }
      });
  }
}
