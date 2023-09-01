export class ApartamentosProprietarioDto {
  constructor(){
    this.nroApartamento = '';
    this.blocoApartamento = '';
    this.qndVagas = 0;
    this.cpfProprietario = '';
    this.nomeProprietario = '';
    this.telProprietario = '';
    this.emailProprietario = '';
  }
  idApartamento?: number;
  nroApartamento: string;
  blocoApartamento: string;
  qndVagas: number;
  cpfProprietario: string;
  nomeProprietario: string;
  telProprietario: string;
  emailProprietario: string;

}
