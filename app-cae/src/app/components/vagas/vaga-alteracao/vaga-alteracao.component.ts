import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from 'src/app/classes/vaga';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga-alteracao',
  templateUrl: './vaga-alteracao.component.html',
  styleUrls: ['./vaga-alteracao.component.css']
})
export class VagaAlteracaoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: VagaService) { }
    
    vaga: Vaga = new Vaga();
    id!: number;

  ngOnInit(): void {
   
    const id = this.route.snapshot.paramMap.get('id');

    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = +idParam; // Convertendo a string para número
      this.buscar(this.id);
    } else {
      // Lidar com a situação onde o id é nulo
      console.error('ID de vaga ausente na URL.');
    }
  }

   buscar(id: number) : void {
    this.service.getVagaApi(id)
    .subscribe(resposta => this.vaga = resposta);
   }
  
   fechar() : void {
    this.router.navigate(['/vagas']);
   }

   alterar(vaga: Vaga) : void {
    this.service.putVagaApi(vaga, this.id).subscribe({
      complete: () => this.fechar()/*,
      error: erro => {
        console.error(erro);
        window.alert(erro);
      }*/
    });
   }
}
