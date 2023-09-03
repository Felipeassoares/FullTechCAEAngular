import { Component, OnInit } from '@angular/core';
import { ApartamentosProprietarioDto } from 'src/app/classes/apartamentos-proprietario-dto';
import { ApartamentoService } from 'src/app/services/apartamento.service';

@Component({
  selector: 'app-apartamentos-proprietario-lista',
  templateUrl: './apartamentos-proprietario-lista.component.html',
  styleUrls: ['./apartamentos-proprietario-lista.component.css']
})
export class ApartamentosProprietarioListaComponent implements OnInit{
  constructor(private service: ApartamentoService) { }
  apartamentos : ApartamentosProprietarioDto[] = [];

  listarApartamentos() : void{
    this.service.getApartamentosProprietarioApi().subscribe(resposta => this.apartamentos = resposta);
  }

  ngOnInit(): void {
    this.listarApartamentos();
  }

}
