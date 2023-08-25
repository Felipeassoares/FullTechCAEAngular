import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProprietariosListaComponent } from 'src/app/components/proprietarios/proprietarios-lista/proprietarios-lista.component';
import { ProprietariosNovoComponent } from 'src/app/components/proprietarios/proprietarios-novo/proprietarios-novo.component';
import { ProprietariosComponent } from 'src/app/components/proprietarios/proprietarios/proprietarios.component';

const routes: Routes = [
  { path: "", component: ProprietariosComponent },
  { path: "novo", component: ProprietariosNovoComponent },
  { path: "lista", component: ProprietariosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProprietariosRoutingModule { }
