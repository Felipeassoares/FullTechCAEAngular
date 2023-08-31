import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ProprietarioAlteracaoComponent } from 'src/app/components/proprietarios/proprietario-alteracao/proprietario-alteracao.component';
import { ProprietarioRemocaoComponent } from 'src/app/components/proprietarios/proprietario-remocao/proprietario-remocao.component';
import { ProprietariosService } from 'src/app/services/proprietarios.service';
import { ProprietariosListaComponent } from '../../components/proprietarios/proprietarios-lista/proprietarios-lista.component';
import { ProprietariosNovoComponent } from '../../components/proprietarios/proprietarios-novo/proprietarios-novo.component';
import { ProprietariosComponent } from '../../components/proprietarios/proprietarios/proprietarios.component';
import { ProprietariosRoutingModule } from './proprietarios-routing.module';

@NgModule({
  declarations: [
    ProprietariosComponent,
    ProprietariosNovoComponent,
    ProprietariosListaComponent,
    ProprietarioAlteracaoComponent,
    ProprietarioRemocaoComponent
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
