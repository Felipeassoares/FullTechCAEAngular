import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from 'src/app/classes/vaga';
import { Veiculo } from 'src/app/classes/veiculo';
import { VagaService } from 'src/app/services/vaga.service';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculos-novo',
  templateUrl: './veiculos-novo.component.html',
  styleUrls: ['./veiculos-novo.component.css']
})
export class VeiculosNovoComponent implements OnInit {

  constructor(
    private router: Router,
    private service: VeiculoService){}

  ngOnInit(): void {
    this.carregarVagasDisponiveis();
  }

  vagasDisponiveis: Vaga[] = [];
  veiculo: Veiculo = new Veiculo();  
  vagaSelecionada: number | undefined;

  carregarVagasDisponiveis(): void {
    this.service.getVagasDisponiveis().subscribe(vagas => {
      this.service.getVeiculosApi().subscribe(veiculos => {
        this.vagasDisponiveis = vagas.filter(vg => {
          return !veiculos.some(vc => vc.vaga === vg.id);
        });
      });
    });
  }


    fechar() { 
      this.router.navigate(['veiculos']) ;
    }
  
    incluir(veiculo: Veiculo) : void {
      if (this.vagaSelecionada !== undefined) {
        veiculo.idVaga = this.vagaSelecionada;
      }

         this.service.postVeiculoApi(veiculo)
         .subscribe({
          complete: () => this.fechar(),
          error: erro => {
            console.error(erro.message);
            window.alert(erro)}
          });
    }

}
