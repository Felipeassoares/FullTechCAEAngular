import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from 'src/app/classes/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga-novo',
  templateUrl: './vaga-novo.component.html',
  styleUrls: ['./vaga-novo.component.css']
})
export class VagaNovoComponent {
  constructor(
    private router: Router,
    private service: VagaService) { }

    vaga: Vaga = new Vaga();
    
  fechar() : void{
    this.router.navigate(['vagas']);
  }

  incluir(vaga: Vaga) : void {
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
