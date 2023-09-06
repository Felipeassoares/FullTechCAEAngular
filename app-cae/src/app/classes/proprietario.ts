export class Proprietario {
  constructor() {
    this.cpf = '';
    this.nome = '';
    this.telefone = '';
    this.email = '';
    this.apartamento = undefined;
    this.numeroApartamento = '';
    this.blocoApartamento = '';
    this.qndVagasApartamento = 0;
    this.dtNascimento = undefined; 
  }

  cpf?: string;
  nome: string;
  telefone: string;
  email: string;
  apartamento?: number | undefined;
  numeroApartamento: string;
  blocoApartamento: string;
  qndVagasApartamento: number;
  dtNascimento?: Date;
}
