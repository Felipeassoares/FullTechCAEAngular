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
        const parts = this.proprietario.dtNascimento.split('/'); // Separa dia, mês e ano
        this.proprietario.dataNascimento = new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0]));
      }
    );
  }
  
  

  fechar(): void {
    this.router.navigate(['/proprietarios']);
  }

  alterar(proprietario: Proprietario): void {
    // Converter a data para o formato "yyyy/MM/dd"
    const dtNascimentoFormatted = `${proprietario.dataNascimento.getFullYear()}-${(proprietario.dataNascimento.getMonth() + 1).toString().padStart(2, '0')}-${proprietario.dataNascimento.getDate().toString().padStart(2, '0')}`;
    proprietario.dtNascimento = dtNascimentoFormatted;
    
    this.service.putProprietarioApi(proprietario, this.cpf).subscribe({
      complete: () => this.fechar(),
      error: erro => {
        console.error(erro);
        window.alert(erro);
      }
    });
  }
} 