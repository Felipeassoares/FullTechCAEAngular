import { Pipe, PipeTransform } from '@angular/core';
import { Vaga } from '../classes/vaga';

@Pipe({
  name: 'filtrarvagas'
})
export class FiltrarVagasPipe implements PipeTransform {

  transform(value: Vaga[], input: string): Vaga[] {
    return !input ? value : 
    value.filter(p => p.numero.toLowerCase().includes(input.toLowerCase()));
  }
}
