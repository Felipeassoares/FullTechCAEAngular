import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from 'src/app/classes/vaga';
import { Veiculo } from 'src/app/classes/veiculo';
import { VeiculoDTO } from 'src/app/classes/veiculo-dto';
import { VagaService } from 'src/app/services/vaga.service';
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
    private service: VeiculoService,
    private vagaService: VagaService) { }

  veiculoDTO: VeiculoDTO = new VeiculoDTO();
  vaga: Vaga = new Vaga();
  vagaOcupada: number | undefined;
  placa!: string;

  ngOnInit(): void {
    this.placa = this.route.snapshot.paramMap.get('id') as string;
    this.buscar(this.placa);
   // this.carregarVagasDisponiveis();
  //  this.vagaSelecionada = this.veiculo.idVaga;
   // this.vagaAtualSelecionada = this.veiculo.idVaga;
    
  }

  buscar(placa: string): void {
    this.service.getVeiculoApi(placa)
      .subscribe(resposta => this.veiculoDTO = resposta);
      
      if (this.veiculoDTO.vaga !== undefined) {
        this.vagaService.getVagaApi(this.veiculoDTO.vaga).subscribe(vagaResposta => {
          this.vaga = vagaResposta;
        });
      }
  }

 // vagasDisponiveis: Vaga[] = [];
 // vagaAtual: Vaga[] = []; // propriedade para armazenar as vagas ocupadas
 // vagaSelecionada: number | undefined;
 // vagaAtualSelecionada: number | undefined;

  // carregarVagasDisponiveis(): void {    
  //   this.service.getVagasDisponiveis().subscribe(vagas => {
  //     this.service.getVeiculosApi().subscribe(veiculos => {
  //       const vagaAtual = veiculos.map(vc => vc.vaga);
  //       this.vagasDisponiveis = vagas.filter(vg => !vagaAtual.includes(vg.id));
  //       this.vagaAtual = vagas.filter(vg => vagaAtual.includes(vg.id));
  //     });
  //   });

    // this.service.getVagasDisponiveis().subscribe(vagas => {
    //   this.service.getVeiculosApi().subscribe(veiculos => {
    //     this.vagasDisponiveis = vagas.filter(vg => {
    //       return !veiculos.some(vc => vc.vaga === vg.id);
    //     });
    //   });
    // });
 // }



  fechar(): void {
    this.router.navigate(['/veiculos']);
  }

  alterar(veiculoDTO: VeiculoDTO) : void {
    console.log('aquii', veiculoDTO)

 
    this.service.putVeiculoApi(veiculoDTO, this.placa).subscribe({
      complete: () => {
        this.fechar();
      },
      error: erro => {
        console.error(erro);
       
      }
    })
   }
}
