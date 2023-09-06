import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proprietario } from 'src/app/classes/proprietario';
import { Apartamento } from 'src/app/classes/apartamento';
import { ProprietariosService } from 'src/app/services/proprietarios.service';

@Component({
  selector: 'app-proprietarios-novo',
  templateUrl: './proprietarios-novo.component.html',
  styleUrls: ['./proprietarios-novo.component.css']
})
export class ProprietariosNovoComponent implements OnInit {

  constructor(
    private router: Router,
    private service: ProprietariosService
  ) {}

  ngOnInit(): void {
    this.carregarApartamentosDisponiveis();
  }

  apartamentosDisponiveis: Apartamento[] = [];
  proprietario: Proprietario = new Proprietario();
  apartamentoSelecionado: number | undefined;
  resposta!: string ;
  estilo!: string ;
  cpfValido: boolean = true; // Variável para verificar se o CPF é válido
  cpfInvalidoMensagem: string = '';
  cpfFormatoInvalidoMensagem: string = '';


  carregarApartamentosDisponiveis(): void {
    this.service.getApartamentosDisponiveis().subscribe(apartamentos => {
      this.service.getProprietariosApi().subscribe(proprietarios => {
        this.apartamentosDisponiveis = apartamentos.filter(apart => {
          return !proprietarios.some(prop => prop.apartamento === apart.id);
        });
      });
    });
  }

  proprietarioExistente: boolean = false;

  // Função para validar o formato do CPF
  validarCPF(cpf: string): boolean {
    // Verifica se o CPF tem 11 dígitos e se não é composto apenas por dígitos repetidos
    return /^\d{11}$/.test(cpf) && !/(\d)\1{10}/.test(cpf);
  }

  validarProprietario(): void {
    const cpf = this.proprietario.cpf;
  
    // Verifica se o CPF é válido
    if (cpf && !this.validarCPF(cpf)) {
      this.cpfInvalidoMensagem = 'CPF inválido. Certifique-se de que o CPF tenha 11 dígitos e não seja composto apenas por dígitos repetidos.';
      this.cpfValido = false;
      return;
    } else {
      this.cpfValido = true;
      this.cpfInvalidoMensagem = ''; // Limpa a mensagem de erro se o CPF for válido
    }
  
    this.service.getProprietariosApi().subscribe(proprietarios => {
      this.proprietarioExistente = proprietarios.some(prop => prop.cpf === cpf);
    });
  }
  
  fechar(): void {
    this.router.navigate(['proprietarios']);
  }

  incluir(proprietario: Proprietario): void {
    // Verifica se o CPF já está cadastrado para outro proprietário
    if (this.proprietarioExistente) {
      this.resposta = 'Este CPF já está cadastrado para outro proprietário.';
      this.estilo = 'alert alert-danger';
      return;
    }
  
    // Verifica se o nome e a data de nascimento não são nulos
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
  
    // Verifica se o apartamento foi selecionado
    if (this.apartamentoSelecionado !== undefined) {
      proprietario.apartamento = this.apartamentoSelecionado;
      this.resposta = 'Inclusão realizado com sucesso.';
      this.estilo = 'alert alert-primary';

    } else {
      this.resposta = 'É obrigatório selecionar apartamento e bloco.';
      this.estilo = 'alert alert-danger';
      return
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
