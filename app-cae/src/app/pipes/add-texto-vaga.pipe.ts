import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtextovaga'
})
export class AddTextoVagaPipe implements PipeTransform {

  transform(value: string, texto: string): string {
    return `${texto}  ${value}`;
  }

}
