import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proprietarios',
  templateUrl: './proprietarios.component.html',
  styleUrls: ['./proprietarios.component.css']
})
export class ProprietariosComponent {
  constructor(private router: Router) { }

  novoProprietario() : void {
    this.router.navigate(['proprietarios/novo']);
  }
}
