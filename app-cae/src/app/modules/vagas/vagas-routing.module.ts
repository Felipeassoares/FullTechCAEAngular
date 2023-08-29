import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagaAlteracaoComponent } from 'src/app/components/vagas/vaga-alteracao/vaga-alteracao.component';
import { VagaNovoComponent } from 'src/app/components/vagas/vaga-novo/vaga-novo.component';
import { VagaRemocaoComponent } from 'src/app/components/vagas/vaga-remocao/vaga-remocao.component';
import { VagasListaComponent } from 'src/app/components/vagas/vagas-lista/vagas-lista.component';
import { VagasComponent } from 'src/app/components/vagas/vagas/vagas.component';

const routes: Routes = [
  { path: "", component: VagasComponent },
  { path: "lista", component: VagasListaComponent },
  { path: "novo", component: VagaNovoComponent },
  { path: "alteracao/:id", component: VagaAlteracaoComponent },
  { path: "remocao/:id", component: VagaRemocaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VagasRoutingModule { }
