import { Component, OnInit } from '@angular/core';
import { ApartamentosProprietarioDto } from 'src/app/classes/apartamentos-proprietario-dto';
import { VagasVeiculoDto } from 'src/app/classes/vagas-veiculo-dto';
import { ApartamentoService } from 'src/app/services/apartamento.service';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-apartamentos-proprietario-lista',
  templateUrl: './apartamentos-proprietario-lista.component.html',
  styleUrls: ['./apartamentos-proprietario-lista.component.css']
})
export class ApartamentosProprietarioListaComponent implements OnInit{
  constructor(private serviceApartamento: ApartamentoService,
    private serviceVaga: VagaService) { }
  apartamentos : ApartamentosProprietarioDto[] = [];
  vagas : VagasVeiculoDto[] = [];

  listarApartamentos() : void{
    this.serviceApartamento.getApartamentosProprietarioApi().subscribe({
      next: resposta => this.apartamentos = resposta,
      complete:() =>  console.log(this.apartamentos)
    }
    );
  }

  listarVagas() : void{
    this.serviceVaga.getVagasVeiculoApi().subscribe({
      next: resposta => this.vagas = resposta,
      complete:() =>  console.log(this.vagas)
    }
    );
  }


  ngOnInit(): void {
    this.listarApartamentos();
    this.listarVagas();
    
  }

}
