import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProprietarioAlteracaoComponent } from 'src/app/components/proprietarios/proprietario-alteracao/proprietario-alteracao.component';
import { ProprietarioRemocaoComponent } from 'src/app/components/proprietarios/proprietario-remocao/proprietario-remocao.component';
import { ProprietariosListaComponent } from 'src/app/components/proprietarios/proprietarios-lista/proprietarios-lista.component';
import { ProprietariosNovoComponent } from 'src/app/components/proprietarios/proprietarios-novo/proprietarios-novo.component';
import { ProprietariosComponent } from 'src/app/components/proprietarios/proprietarios/proprietarios.component';

const routes: Routes = [
  { path: "", component: ProprietariosComponent },
  { path: "novo", component: ProprietariosNovoComponent },
  { path: "lista", component: ProprietariosListaComponent },
  { path: "lista/:cpf", component: ProprietariosListaComponent },
  { path: "alteracao/:cpf", component: ProprietarioAlteracaoComponent },
  { path: "remocao/:cpf", component: ProprietarioRemocaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
