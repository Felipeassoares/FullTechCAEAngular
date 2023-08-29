import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../classes/usuario';

@Pipe({
  name: 'filtrarusuarios'
})
export class FiltrarUsuariosPipe implements PipeTransform {

  transform(value: Usuario[], input: string): Usuario[] {
    return !input ? value : 
    value.filter(p => p.nome.toLowerCase().includes(input.toLowerCase()));
  }

}
