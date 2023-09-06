import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.atribuirUsuario();
  }
  nomeUsuario!: string;

  // método responsável por atualizar o nome do usuário de acordo 
  // com seu status (logado/ não logado)
  atribuirUsuario() : void {
    if(localStorage.getItem("nome_usuario")) {
      this.nomeUsuario = "Olá, " + localStorage.getItem("nome_usuario");
    } else {
      this.nomeUsuario = "Efetuar Login";
    }
  }

  mostrar(texto: string) : void {
    localStorage.clear();
    this.atribuirUsuario();
    alert(texto);
  }

  // método a ser executado pelo evento 'activate' do elemento router-outlet
  onActivate(event: any) : void {
    console.log(event);
    this.atribuirUsuario();
  }
}


