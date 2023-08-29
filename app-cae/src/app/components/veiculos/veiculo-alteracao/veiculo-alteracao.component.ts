import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  }

  buscar(placa: string): void {
    this.service.getVeiculoApi(placa)
      .subscribe(resposta => this.veiculo = resposta);
  }

  fechar() {
    this.router.navigate(['/veiculos']);
  }

  alterar(veiculo: Veiculo) {
    this.service.putVeiculoApi(veiculo, this.placa)
      .subscribe({
        complete: () => this.fechar(),
        error: erro => {
          console.error(erro);
          window.alert(erro);
        }
      });
  }

}
