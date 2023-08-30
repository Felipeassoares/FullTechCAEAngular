import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoAlteracaoComponent } from 'src/app/components/veiculos/veiculo-alteracao/veiculo-alteracao.component';
import { VeiculoRemocaoComponent } from 'src/app/components/veiculos/veiculo-remocao/veiculo-remocao.component';
import { VeiculosListaComponent } from 'src/app/components/veiculos/veiculos-lista/veiculos-lista.component';
import { VeiculosNovoComponent } from 'src/app/components/veiculos/veiculos-novo/veiculos-novo.component';
import { VeiculosComponent } from 'src/app/components/veiculos/veiculos/veiculos.component';

const routes: Routes = [
  { path: "", component: VeiculosComponent},
  { path: "novo", component: VeiculosNovoComponent},
  { path: "lista", component: VeiculosListaComponent},
  { path: "alteracao/:id", component: VeiculoAlteracaoComponent},
  { path: "remocao/:id", component: VeiculoRemocaoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeiculosRoutingModule { }
