import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartamento } from 'src/app/classes/apartamento';
import { ApartamentoService } from 'src/app/services/apartamento.service';

@Component({
  selector: 'app-apartamento-remocao',
  templateUrl: './apartamento-remocao.component.html',
  styleUrls: ['./apartamento-remocao.component.css']
})
export class ApartamentoRemocaoComponent implements OnInit{

  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private service: ApartamentoService
    ){ }
  
    apartamento: Apartamento = new Apartamento();
    id!: number;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam; 
      this.buscar(this.id);
    } else {

      console.error('ID de apartamento ausente na URL.');
    }
  }

  buscar(id: number): void {
    this.service.getApartamentoApi(id).subscribe(resposta => this.apartamento = resposta);
  }
  fechar() {
    this.router.navigate(['/apartamentos']);
  }
  remover(): void {
    this.service.deleteApartamento(this.id).subscribe(
      {
       complete: () =>  this.fechar(),
    });
  }
}