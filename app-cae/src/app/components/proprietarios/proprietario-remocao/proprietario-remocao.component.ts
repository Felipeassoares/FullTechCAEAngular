import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartamento } from 'src/app/classes/apartamento';
import { Proprietario } from 'src/app/classes/proprietario';
import { ApartamentoService } from 'src/app/services/apartamento.service';
import { ProprietariosService } from 'src/app/services/proprietarios.service';

@Component({
  selector: 'app-proprietario-remocao',
  templateUrl: './proprietario-remocao.component.html',
  styleUrls: ['./proprietario-remocao.component.css']
})
export class ProprietarioRemocaoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProprietariosService,
    private apartamentoService: ApartamentoService) { }

    proprietario: Proprietario = new Proprietario();
    apartamento: Apartamento = new Apartamento();
    cpf!: string;
  
    ngOnInit(): void {
      const cpfParam = this.route.snapshot.paramMap.get('cpf');
      if (cpfParam) {
        this.cpf = cpfParam;
        this.buscar(this.cpf);
      } else {
  
        console.error('CPF do proprietário ausente na URL.');
      }
    }
  
    buscar(cpf: string): void {
      this.service.getProprietarioApi(cpf).subscribe(resposta => this.proprietario = resposta);
  
      if (this.proprietario.apartamento !== undefined) {
        this.apartamentoService.getApartamentoApi(this.proprietario.apartamento).subscribe(apartamentoResposta => {
          this.apartamento = apartamentoResposta;
          this.proprietario.apartamento = apartamentoResposta.id;
        });
      }
    }
  
    fechar() {
      this.router.navigate(['/proprietarios']);
    }
  
    remover(): void {
      this.service.deleteProprietario(this.cpf).subscribe(
        {
          complete: () => this.fechar(),
        });
      setTimeout(() => {
        this.fechar();
      }, 2000);
    }
  }