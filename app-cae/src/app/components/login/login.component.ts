import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/classes/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private router: Router) {}
  ngOnInit(): void {
    
  }

  fechar() : void {
    this.router.navigate(['/']); // home
  }

  user: Usuario = new Usuario();
  erro!: string;

  validar(user: Usuario) : void {
    if(user.nome === 'admin' && user.senha === 'admin') {
      // usuario logado (fake)
      localStorage.setItem('nome_usuario', user.nome);
      this.fechar();
    } else {
      this.erro = "Usuário ou senha inválidos";
    }
  }

}
