import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addtexto'
})
export class AddTextoPipe implements PipeTransform {

  transform(value: string, texto: string): string {
    return `${texto}  ${value}`;
  }

}
