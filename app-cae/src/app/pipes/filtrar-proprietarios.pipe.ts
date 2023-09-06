import { Pipe, PipeTransform } from '@angular/core';
import { Proprietario } from '../classes/proprietario';

@Pipe({
  name: 'filtrarproprietarios'
})
export class FiltrarProprietariosPipe implements PipeTransform {

  transform(value: Proprietario[], input: string): Proprietario[] {
    return !input ? value : 
    value.filter(p => p.nome.toLowerCase().includes(input.toLowerCase()));
  }

}
