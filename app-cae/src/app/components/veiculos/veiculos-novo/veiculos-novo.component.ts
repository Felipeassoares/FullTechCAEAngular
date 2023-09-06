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
  resposta!: string;
  estilo!: string;


  carregarVagasDisponiveis(): void {
    this.service.getVagasDisponiveis().subscribe(vagas => {
      this.service.getVeiculosApi().subscribe(veiculos => {
        this.vagasDisponiveis = vagas.filter(vg => {
          return !veiculos.some(vc => vc.idVaga === vg.id);
        });
      });
    });
  }


    fechar() { 
      this.router.navigate(['veiculos']) ;
    }
  
    incluir(veiculo: Veiculo) : void {
      if (veiculo.placa == null || veiculo.placa == undefined || veiculo.placa == '') {
        this.resposta = 'A placa do veículo deve ser informada';
        this.estilo = "alert alert-danger";
        return;
      }

      if (veiculo.cor == null || veiculo.cor == undefined || veiculo.cor == '') {
        this.resposta = 'A cor do veículo deve ser informada';
        this.estilo = "alert alert-danger";
        return;
      }

      if (veiculo.modelo == null || veiculo.modelo == undefined || veiculo.modelo == '') {
        this.resposta = 'O modelo do veículo deve ser informado';
        this.estilo = "alert alert-danger";
        return;
      }

      if (this.vagaSelecionada == null ||this.vagaSelecionada == undefined) {
        this.resposta = 'A vaga deve ser selecionada';
        this.estilo = "alert alert-danger";
        return;
      }

      if (this.vagaSelecionada !== undefined) {
        veiculo.idVaga = this.vagaSelecionada;
        return;
              }          


         this.service.postVeiculoApi(veiculo)
         .subscribe({
          complete: () => this.fechar(),
          error: erro => {
            console.error(erro.message)
          }});
    }

    
  veiculoExistente: boolean = false; 

  validarVeiculo(): void {
    this.service.getVeiculosApi().subscribe(veiculos => {
      this.veiculoExistente = veiculos.some(vc => vc.placa === this.veiculo.placa);
    });

  }

}
