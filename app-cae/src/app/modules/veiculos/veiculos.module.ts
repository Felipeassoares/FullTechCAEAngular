import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeiculosRoutingModule } from './veiculos-routing.module';
import { VeiculosComponent } from 'src/app/components/veiculos/veiculos/veiculos.component';
import { VeiculosListaComponent } from 'src/app/components/veiculos/veiculos-lista/veiculos-lista.component';
import { VeiculosNovoComponent } from 'src/app/components/veiculos/veiculos-novo/veiculos-novo.component';
import { FormsModule } from '@angular/forms';
import { VeiculoService } from 'src/app/services/veiculo.service';


@NgModule({
  declarations: [
    VeiculosComponent,
    VeiculosListaComponent,
    VeiculosNovoComponent
  ],
  imports: [
    CommonModule,
    VeiculosRoutingModule,
    FormsModule
  ],
  providers: [
    VeiculoService
  ]
})
export class VeiculosModule { }
