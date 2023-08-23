import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apartamentos',
  templateUrl: './apartamentos.component.html',
  styleUrls: ['./apartamentos.component.css']
})
export class ApartamentosComponent {
  constructor(private router: Router) { }  

  novoApartamento() : void {
    this.router.navigate(['apartamentos/novo']);
}
}