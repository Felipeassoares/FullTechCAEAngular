import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagasListaComponent } from '../../components/vagas/vagas-lista/vagas-lista.component';
import { VagasComponent } from '../../components/vagas/vagas/vagas.component';
import { VagaNovoComponent } from '../../components/vagas/vaga-novo/vaga-novo.component';
import { VagaService } from 'src/app/services/vaga.service';
import { VagaRemocaoComponent } from 'src/app/components/vagas/vaga-remocao/vaga-remocao.component';
import { VagaAlteracaoComponent } from 'src/app/components/vagas/vaga-alteracao/vaga-alteracao.component';

@NgModule({
  declarations: [
    VagasListaComponent,
    VagasComponent,
    VagaNovoComponent,
    VagaRemocaoComponent,
    VagaAlteracaoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    VagasRoutingModule
  ],
  providers: [
    VagaService
  ]
})
export class VagasModule { }
