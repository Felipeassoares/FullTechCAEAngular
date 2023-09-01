import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proprietario } from 'src/app/classes/proprietario';
import { ProprietariosService } from 'src/app/services/proprietarios.service';

@Component({
  selector: 'app-proprietario-alteracao',
  templateUrl: './proprietario-alteracao.component.html',
  styleUrls: ['./proprietario-alteracao.component.css']
})
export class ProprietarioAlteracaoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ProprietariosService) { }

  proprietario: Proprietario = new Proprietario();
  cpf!: string;

  ngOnInit(): void {

    const cpf = this. route.snapshot.paramMap.get('cpf');

    if (cpf) {
      this.cpf = cpf;
      this.buscar(this.cpf);
    } else {
      console.error('CPF de proprietário ausente na URL.');
    }
  }

  buscar(cpf: string): void {
    this.service.getProprietarioApi(cpf).subscribe(
      resposta => {
        this.proprietario = resposta;
      }
    );
  }
  
  

  fechar(): void {
    this.router.navigate(['/proprietarios']);
  }

  alterar(proprietario: Proprietario): void {
     this.service.putProprietarioApi(proprietario, this.cpf).subscribe({
       complete: () => this.fechar(),
       //error: erro => {
        // console.error(erro);
        // window.alert(erro);
      // }
    });
  }
} 