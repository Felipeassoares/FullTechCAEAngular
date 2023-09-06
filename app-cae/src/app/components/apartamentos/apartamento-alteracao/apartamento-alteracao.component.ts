import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartamento } from 'src/app/classes/apartamento';
import { ApartamentoService } from 'src/app/services/apartamento.service';

@Component({
  selector: 'app-apartamento-alteracao',
  templateUrl: './apartamento-alteracao.component.html',
  styleUrls: ['./apartamento-alteracao.component.css']
})
export class ApartamentoAlteracaoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ApartamentoService) { }

  apartamento: Apartamento = new Apartamento();
  id!: number;
  resposta!: string;
  estilo!: string;  

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

  buscar(id: number): void {
    this.service.getApartamentoApi(id)
      .subscribe(resposta => this.apartamento = resposta);
  }

  fechar(): void {
    this.router.navigate(['/apartamentos']);
  }

  validarApartamento(): void {
    this.service.getApartamentosApi().subscribe(ap => {
      this.apExistente = ap.some(v => (v.numero === this.apartamento.numero) && (v.bloco === this.apartamento.bloco) && v.id != this.apartamento.id);
    });
  }    

  apExistente: boolean = false;
  alterar(apartamento: Apartamento): void {
    if (apartamento.numero == null || apartamento.numero == undefined || apartamento.numero == '') {
      this.resposta = 'O numero do apartamento deve ser informado.';
      this.estilo = "alert alert-danger";
      return;
    }

    if (apartamento.bloco == null || apartamento.bloco == undefined || apartamento.bloco == '') {
      this.resposta = 'O bloco do apartamento deve ser informado.';
      this.estilo = "alert alert-danger";

       return;
     }

     if (apartamento.qndvagas <= 0) {
      this.resposta = 'A quantidade de vagas do apartamento deve ser maior que zero.';
      this.estilo = "alert alert-danger";
       return;
     }     

    this.service.putApartamentoApi(apartamento, this.id).subscribe({
      complete: () => {
        this.fechar();
      },

      // error: erro => {
      //   console.error(erro);
      //   window.alert(erro);
      // }
    });
    setTimeout(() => {
      this.fechar();
    }, 1000);

  }
}

