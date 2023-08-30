export class Vaga {
    constructor() {
        this.id = undefined;
        this.numero = '';
        this.bloco = '';
        this.apartamento = undefined;
        this.idAP = this.apartamento;
        this.numeroApt = '';
        this.blocoAp = '';
    }

    id?: number;	
	bloco: string;
	numero: string;
    apartamento?: number | undefined;
    idAP?: number | undefined;
    numeroApt!: string | undefined;
    blocoAp!: string | undefined;
}
