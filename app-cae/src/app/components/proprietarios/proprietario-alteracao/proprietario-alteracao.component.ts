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
  resposta!: string;
  estilo!: string; 

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
if (!proprietario.nome) {
  this.resposta = 'O nome é obrigatório.';
  this.estilo = 'alert alert-danger';
  return;
}

if (!proprietario.dtNascimento) {
  this.resposta = 'A data de nascimento é obrigatória.';
  this.estilo = 'alert alert-danger';
  return;
}

// Se tudo estiver válido, tenta incluir o proprietário
this.service.postProprietarioApi(proprietario).subscribe({
  complete: () => this.fechar(),
});
setTimeout(() => {
  this.fechar();
}, 2000);
}
}

