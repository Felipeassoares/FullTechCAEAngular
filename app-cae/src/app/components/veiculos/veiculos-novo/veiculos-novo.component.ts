import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from 'src/app/classes/veiculo';
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
    throw new Error('Method not implemented.');
  }

 // vagas: Vaga[] = [];
  veiculo: Veiculo = new Veiculo();  

    fechar() { 
      this.router.navigate(['/veiculos']) ;
    }
  
    incluir(veiculo: Veiculo) : void {
       this.service.postVeiculoApi(veiculo)
         .subscribe({
          complete: () => this.fechar(),
          error: erro => console.error(erro.message)
          });
    }

}
