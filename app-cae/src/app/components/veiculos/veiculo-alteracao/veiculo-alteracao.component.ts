import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/classes/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-alteracao',
  templateUrl: './veiculo-alteracao.component.html',
  styleUrls: ['./veiculo-alteracao.component.css']
})

export class VeiculoAlteracaoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: VeiculoService) { }

  veiculo: Veiculo = new Veiculo();
  placa!: string;
  resposta!: string;
  estilo!: string;
  

  ngOnInit(): void {
    this.placa = this.route.snapshot.paramMap.get('id') as string;
    this.buscar(this.placa);
  }

  buscar(placa: string): void {
    this.service.getVeiculoApi(placa)
      .subscribe(resposta => this.veiculo = resposta);
  }

  fechar(): void {
    this.router.navigate(['/veiculos']);
  }

  alterar(veiculo: Veiculo): void {
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
    this.service.putVeiculoApi(veiculo, this.placa).subscribe({
      complete: () => this.fechar(),
      error: erro => {
        console.error(erro);

      }
    });

    setTimeout(() => {
      this.fechar();
    }, 1000);

  }
}
