import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { ApartamentoService } from './services/apartamento.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { ApartamentosListaComponent } from './components/apartamentos/apartamentos-lista/apartamentos-lista.component';
import { ApartamentoNovoComponent } from './components/apartamentos/apartamento-novo/apartamento-novo.component';
import { ApartamentosComponent } from './components/apartamentos/apartamentos/apartamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ApresentacaoComponent,
    NotFoundComponent,
    ApartamentosComponent,
    ApartamentoNovoComponent,
    ApartamentosListaComponent


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ApartamentoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
