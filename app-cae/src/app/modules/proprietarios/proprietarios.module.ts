import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProprietariosRoutingModule } from './proprietarios-routing.module';
import { ProprietariosComponent } from '../../components/proprietarios/proprietarios/proprietarios.component';
import { ProprietariosNovoComponent } from '../../components/proprietarios/proprietarios-novo/proprietarios-novo.component';
import { ProprietariosListaComponent } from '../../components/proprietarios/proprietarios-lista/proprietarios-lista.component';
import { ProprietariosService } from 'src/app/services/proprietarios.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProprietariosComponent,
    ProprietariosNovoComponent,
    ProprietariosListaComponent
  ],
  imports: [
    CommonModule,
    ProprietariosRoutingModule,
    FormsModule
  ],
  providers: [
    ProprietariosService
  ]
})
export class ProprietariosModule { }
