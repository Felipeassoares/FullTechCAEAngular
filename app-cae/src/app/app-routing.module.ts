import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApartamentosComponent } from './components/apartamentos/apartamentos/apartamentos.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { ApartamentoNovoComponent } from './components/apartamentos/apartamento-novo/apartamento-novo.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "apresentacao", component: ApresentacaoComponent },
  { path: "apartamentos", component: ApartamentosComponent },
  { path: "apartamentos/novo", component: ApartamentoNovoComponent },
  { path:"**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
