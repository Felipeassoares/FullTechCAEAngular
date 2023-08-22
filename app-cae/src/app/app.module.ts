import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ApartamentoComponent } from './components/apartamento/apartamento.component';
import { HomeComponent } from './components/home/home.component';
import { ApartamentoService } from './services/apartamento.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ApartamentoComponent
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
