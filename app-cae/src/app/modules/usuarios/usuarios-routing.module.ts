import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListaComponent } from 'src/app/components/usuarios/usuarios-lista/usuarios-lista.component';
import { UsuariosComponent } from 'src/app/components/usuarios/usuarios/usuarios.component';

const routes: Routes = [
  { path: "", component: UsuariosComponent },
  { path: "lista", component: UsuariosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
