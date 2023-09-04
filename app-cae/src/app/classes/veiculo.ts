export class Veiculo {

    constructor() {
        this.placa = '';
        this.cor = '';
        this.modelo = '';
        this.numero = '';
        this.bloco = '';
        this.idVaga = undefined;          
        
    }
    placa!: string;
    cor!: string
    modelo!: string;  
    numero!: string; 
    bloco!: string; 
   // vaga?: number | undefined;
    idVaga?: number | undefined;
}
