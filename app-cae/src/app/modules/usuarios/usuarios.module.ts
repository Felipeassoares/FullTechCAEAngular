import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from 'src/app/components/usuarios/usuarios/usuarios.component';
import { UsuariosListaComponent } from 'src/app/components/usuarios/usuarios-lista/usuarios-lista.component';
import { FormsModule } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FiltrarUsuariosPipe } from 'src/app/pipes/filtrar-usuarios.pipe';


@NgModule({
  declarations: [UsuariosComponent,
    UsuariosListaComponent,
    FiltrarUsuariosPipe   
     ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule
  ],
  providers: [
    UsuariosService
  ]
})
export class UsuariosModule { }
