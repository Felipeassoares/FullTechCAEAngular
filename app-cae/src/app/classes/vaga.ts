export class Vaga {
    constructor() {
        this.id = undefined;
        this.numero = '';
        this.bloco = '';
        this.apartamento = undefined;
        this.idAP = this.apartamento;
    }

    id?: number;	
	bloco: string;
	numero: string;
    apartamento?: number | undefined;
    idAP?: number | undefined;
}
