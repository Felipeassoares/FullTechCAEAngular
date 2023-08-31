import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from 'src/app/classes/vaga';
import { Veiculo } from 'src/app/classes/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-alteracao',
  templateUrl: './veiculo-alteracao.component.html',
  styleUrls: ['./veiculo-alteracao.component.css']
})

export class VeiculoAlteracaoComponent implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: VeiculoService) { }

  veiculo: Veiculo = new Veiculo;
  placa!: string;

  ngOnInit(): void {
    this.placa = this.route.snapshot.paramMap.get('id') as string;
    this.buscar(this.placa);
    this.carregarVagasDisponiveis();
    this.vagaSelecionada = this.veiculo.idVaga;
    
  }

  buscar(placa: string): void {
    this.service.getVeiculoApi(placa)
      .subscribe(resposta => this.veiculo = resposta);
  }

  vagasDisponiveis: Vaga[] = [];
  vagaAtual: Vaga[] = []; // propriedade para armazenar as vagas ocupadas
  vagaSelecionada: number | undefined;

  carregarVagasDisponiveis(): void {    
    this.service.getVagasDisponiveis().subscribe(vagas => {
      this.service.getVeiculosApi().subscribe(veiculos => {
        const vagaAtual = veiculos.map(vc => vc.vaga);
        this.vagasDisponiveis = vagas.filter(vg => !vagaAtual.includes(vg.id));
        this.vagaAtual = vagas.filter(vg => vagaAtual.includes(vg.id));
      });
    });
    // this.service.getVagasDisponiveis().subscribe(vagas => {
    //   this.service.getVeiculosApi().subscribe(veiculos => {
    //     this.vagasDisponiveis = vagas.filter(vg => {
    //       return !veiculos.some(vc => vc.vaga === vg.id);
    //     });
    //   });
    // });
  }



  fechar() {
    this.router.navigate(['/veiculos']);
  }

  alterar(veiculo: Veiculo) {
    if (this.vagaSelecionada !== undefined) {
      veiculo.idVaga = this.vagaSelecionada;
    }
    
    this.service.putVeiculoApi(veiculo, this.placa)
      .subscribe({
        complete: () => this.fechar(),
       /* error: erro => {
          console.error(erro);
          window.alert(erro);
        }*/
      });
  }

}
