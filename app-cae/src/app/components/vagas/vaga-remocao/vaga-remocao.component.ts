import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartamento } from 'src/app/classes/apartamento';
import { Vaga } from 'src/app/classes/vaga';
import { ApartamentoService } from 'src/app/services/apartamento.service';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga-remocao',
  templateUrl: './vaga-remocao.component.html',
  styleUrls: ['./vaga-remocao.component.css']
})
export class VagaRemocaoComponent implements OnInit {
 
 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: VagaService,
    private apartamentoService: ApartamentoService
  ) { }

  vaga: Vaga = new Vaga();
  apartamento: Apartamento = new Apartamento();
  id!: number;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam;
      this.buscar(this.id);
    } else {

      console.error('ID da vaga ausente na URL.');
    }
  }

  buscar(id: number): void {
    this.service.getVagaApi(id).subscribe(resposta => {
      this.vaga = resposta;

      if (this.vaga.apartamento !== undefined) {
        this.apartamentoService.getApartamentoApi(this.vaga.apartamento).subscribe(apartamentoResposta => {
          this.apartamento = apartamentoResposta;
          this.vaga.blocoAp = apartamentoResposta.bloco;
        });
      }
    });
  }

  fechar() {
    this.router.navigate(['/vagas']);
  }

  remover(): void {
    this.service.deleteVaga(this.id).subscribe(
      {
        complete: () => this.fechar(),
      });
    setTimeout(() => {
      this.fechar();
    }, 2000);
  }
}