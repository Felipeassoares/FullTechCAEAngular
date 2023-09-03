export class Veiculo {

    constructor() {
        this.placa = '';
        this.cor = '';
        this.modelo = '';
        this.vaga = undefined;
        this.idVaga = this.vaga;
        this.numeroVaga = '';
        this.blocoVaga = '';
    }

    placa!: string;
    cor!: string
    modelo!: string;
    vaga?: number | undefined;
    idVaga?: number | undefined;
    numeroVaga!: string | undefined;
    blocoVaga!: string | undefined;
}
