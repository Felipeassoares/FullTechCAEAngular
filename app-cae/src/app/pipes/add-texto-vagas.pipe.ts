import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtextovagas'
})
export class AddTextoVagasPipe implements PipeTransform {

  transform(value: string, texto: string): string {
    return `${texto}  ${value}`;
  }
}
