export class VeiculoDTO {

    constructor() {
        this.placa = '';
        this.cor = '';
        this.modelo = '';
        this.numero = '';
        this.bloco = '';
        this.vaga = undefined;
        this.idVaga = this.vaga;      
        
    }
    placa!: string;
    cor!: string
    modelo!: string;  
    numero!: string; 
    bloco!: string; 
    vaga?: number | undefined;
    idVaga?: number | undefined;
   
    }
