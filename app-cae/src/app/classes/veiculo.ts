export class Veiculo {

    constructor() {
        this.placa = '';
        this.cor = '';
        this.modelo = '';
        this.vaga = undefined;
        this.idVaga = this.vaga;
        this.numero = '';
        this.bloco = '';
    }

    placa!: string;
    cor!: string
    modelo!: string;
    vaga?: number | undefined;
    idVaga?: number | undefined;
    numero!: string; 
    bloco!: string ;
}
