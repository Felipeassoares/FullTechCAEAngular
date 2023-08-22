import { Injectable } from '@angular/core';
import { Apartamento } from '../classes/apartamento';


@Injectable()
export class ApartamentoService {

  constructor() { }

  listarApartamentos(): Apartamento[] {
    return [
      { id:1 , numero: '110', bloco: 'A1', qndVagas: 1},
      { id:2 , numero: '320', bloco: 'D5', qndVagas: 3},
      { id:3 , numero: '485', bloco: 'F7', qndVagas: 2}
    ];
  }
}
