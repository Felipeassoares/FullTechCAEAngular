import { Component } from '@angular/core';
import { Veiculo } from 'src/app/classes/veiculo';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculos-lista',
  templateUrl: './veiculos-lista.component.html',
  styleUrls: ['./veiculos-lista.component.css']
})
export class VeiculosListaComponent {

  constructor(private service: VeiculoService) {}
  ngOnInit(): void {
    this.listar();
  }

  veiculos: Veiculo[] = [];

  listar() : void {
    this.service.getVeiculosApi().subscribe(resposta => this.veiculos = resposta);
  }

}
