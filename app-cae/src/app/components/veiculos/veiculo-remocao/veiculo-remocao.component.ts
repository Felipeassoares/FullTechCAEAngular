import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/classes/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-remocao',
  templateUrl: './veiculo-remocao.component.html',
  styleUrls: ['./veiculo-remocao.component.css']
})
export class VeiculoRemocaoComponent implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: VeiculoService
    ) { }

  veiculo: Veiculo = new Veiculo();  
  placa!: string;

  ngOnInit(): void {
    this.placa = this.route.snapshot.paramMap.get('id') as string;
    this.buscar(this.placa);
  }

  buscar(placa: string) : void {
    this.service.getVeiculoApi(placa).subscribe(resposta => this.veiculo = resposta);
  }

  fechar() {
    this.router.navigate(['/veiculos']);
  }

  remover() : void {
    this.service.deleteVeiculoApi(this.placa).subscribe( () => this.fechar());
  }

}
