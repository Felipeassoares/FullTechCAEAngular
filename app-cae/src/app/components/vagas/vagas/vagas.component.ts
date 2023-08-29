import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent {
  constructor(private router: Router) { }  

  novaVaga() : void {
    this.router.navigate(['vagas/novo']);
  }
}
