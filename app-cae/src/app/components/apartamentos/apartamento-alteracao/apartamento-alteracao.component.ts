import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartamento } from 'src/app/classes/apartamento';
import { ApartamentoService } from 'src/app/services/apartamento.service';

@Component({
  selector: 'app-apartamento-alteracao',
  templateUrl: './apartamento-alteracao.component.html',
  styleUrls: ['./apartamento-alteracao.component.css']
})
export class ApartamentoAlteracaoComponent implements OnInit{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ApartamentoService) { }
    
    apartamento: Apartamento = new Apartamento();
    id!: number;

  ngOnInit(): void {
   
    const id = this.route.snapshot.paramMap.get('id');

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam; // Convertendo a string para número
      this.buscar(this.id);
    } else {
      // Lidar com a situação onde o id é nulo
      console.error('ID de apartamento ausente na URL.');
    }
  }

   buscar(id: number) : void {
    this.service.getApartamentoApi(id)
    .subscribe(resposta => this.apartamento = resposta);
   }
  
   fechar() : void {
    this.router.navigate(['/apartamentos']);
   }

   alterar(apartamento: Apartamento) : void {
    this.service.putApartamentoApi(apartamento, this.id).subscribe({
      complete: () => {
        this.fechar();
      },
      error: erro => {
        console.error(erro);
        window.alert(erro);
      }
    })
   }
}

