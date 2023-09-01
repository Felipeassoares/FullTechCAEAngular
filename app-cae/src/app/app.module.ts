import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartamentoNovoComponent } from './components/apartamentos/apartamento-novo/apartamento-novo.component';
import { ApartamentosListaComponent } from './components/apartamentos/apartamentos-lista/apartamentos-lista.component';
import { ApartamentosComponent } from './components/apartamentos/apartamentos/apartamentos.component';
import { ApresentacaoComponent } from './components/apresentacao/apresentacao.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ApartamentoService } from './services/apartamento.service';
import { ApartamentoAlteracaoComponent } from './components/apartamentos/apartamento-alteracao/apartamento-alteracao.component';
import { ApartamentoRemocaoComponent } from './components/apartamentos/apartamento-remocao/apartamento-remocao.component';
import { VagaService } from './services/vaga.service';
import { AddTextoPipe } from './pipes/add-texto.pipe';
import { RodapeComponent } from './components/rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ApresentacaoComponent,
    NotFoundComponent,
    ApartamentosComponent,
    ApartamentoNovoComponent,
    ApartamentosListaComponent,
    ApartamentoAlteracaoComponent,
    ApartamentoRemocaoComponent,
    AddTextoPipe,
    RodapeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApartamentoService,
    VagaService,
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
