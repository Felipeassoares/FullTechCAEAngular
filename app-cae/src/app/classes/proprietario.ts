export class Proprietario {
  constructor() {
    this.cpf = '';
    this.nome = '';
    this.telefone = '';
    this.dataNascimento = new Date(); 
    this.email = '';
    this.apartamento = undefined;
    this.numeroApartamento = '';
    this.blocoApartamento = '';
    this.qndVagasApartamento = 0;
    this.dtNascimento = '';
  }

  cpf?: string;
  nome: string;
  telefone: string;
  dataNascimento: Date; 
  email: string;
  apartamento?: number | undefined;
  numeroApartamento: string;
  blocoApartamento: string;
  qndVagasApartamento: number;
  dtNascimento: string;
}
