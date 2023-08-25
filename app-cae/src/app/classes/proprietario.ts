export class Proprietario {
    constructor() {
        this.cpf = '';
        this.nome = '';
        this.telefone = '';
        this.dtNascimento = '';
        this.email = '';
        this.apartamento = 0;
    }

    cpf?: string;
    nome: string;
    telefone: string;
    dtNascimento: string;
    email: string;
    apartamento: number;
}
