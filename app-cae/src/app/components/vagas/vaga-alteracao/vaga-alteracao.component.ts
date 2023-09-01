import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartamento } from 'src/app/classes/apartamento';
import { Vaga } from 'src/app/classes/vaga';
import { ApartamentoService } from 'src/app/services/apartamento.service';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga-alteracao',
  templateUrl: './vaga-alteracao.component.html',
  styleUrls: ['./vaga-alteracao.component.css']
})
export class VagaAlteracaoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: VagaService,
    private apartamentoService: ApartamentoService) { }

  vaga: Vaga = new Vaga();
  apartamento: Apartamento = new Apartamento();
  id!: number;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam; // Convertendo a string para número
      this.buscar(this.id);
    } else {
      // Lidar com a situação onde o id é nulo
      console.error('ID de vaga ausente na URL.');
    }
  }

  vagaExistente: boolean = false;

  validarVaga(): void {
    this.service.getVagasApi().subscribe(vagas => {
      this.vagaExistente = vagas.some(v => v.numero === this.vaga.numero && v.id != this.vaga.id);
    });
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

  fechar(): void {
    this.router.navigate(['/vagas']);
  }

  alterar(vaga: Vaga): void {
    this.service.putVagaApi(vaga, this.id).subscribe({
      complete: () => this.fechar()/*,
      error: erro => {
        console.error(erro);
        window.alert(erro);
      }*/
    });
    setTimeout(() => {
      this.fechar();
    }, 1000);
  }
}
