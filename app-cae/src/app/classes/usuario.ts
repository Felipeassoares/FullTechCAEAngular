export class Usuario {
  constructor() {
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.nivelAcesso = '';
}

id?: number;
nome: string;
email: string;
senha?: string;
dtCadastro?: Date;
nivelAcesso: String;
}
