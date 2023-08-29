import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApartamentoNovoComponent } from './components/apartamentos/apartamento-novo/apartamento-novo.component';
import { ApartamentosComponent } from './components/apartamentos/apartamentos/apartamentos.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApartamentoAlteracaoComponent } from './components/apartamentos/apartamento-alteracao/apartamento-alteracao.component';
import { ApartamentoRemocaoComponent } from './components/apartamentos/apartamento-remocao/apartamento-remocao.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "apresentacao", component: ApresentacaoComponent },
  { path: "apartamentos", component: ApartamentosComponent },
  { path: "apartamentos/novo", component: ApartamentoNovoComponent },
  { path: "apartamentos/alteracao/:id", component: ApartamentoAlteracaoComponent },
  { path: "apartamentos/remocao/:id", component: ApartamentoRemocaoComponent },
  
  { path: "proprietarios", loadChildren:
  () => import('./modules/proprietarios/proprietarios.module').then(m => m.ProprietariosModule)},
  
  { path: "vagas", loadChildren:
  () => import('./modules/vagas/vagas.module').then(m => m.VagasModule)},
  

  { path: "usuarios", loadChildren:
  () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule)},

  { path:"**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
