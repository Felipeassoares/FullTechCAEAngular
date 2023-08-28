import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VagasRoutingModule } from './vagas-routing.module';
import { VagasListaComponent } from '../../components/vagas/vagas-lista/vagas-lista.component';
import { VagasComponent } from '../../components/vagas/vagas/vagas.component';
import { VagaNovoComponent } from '../../components/vagas/vaga-novo/vaga-novo.component';
import { VagaService } from 'src/app/services/vaga.service';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    VagasListaComponent,
    VagasComponent,
    VagaNovoComponent
  ],
  imports: [
    CommonModule,
    VagasRoutingModule,
    FormsModule
  ],
  providers: [
    VagaService
  ]
})
export class VagasModule { }
