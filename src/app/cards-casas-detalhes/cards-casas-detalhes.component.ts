import { Component, inject } from '@angular/core';
import { LocalCasasService } from '../local-casas.service';
import { ContratoCasas } from '../contrato-casas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards-casas-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './cards-casas-detalhes.component.html',
  styleUrl: './cards-casas-detalhes.component.css'
})
export class CardsCasasDetalhesComponent {
 
  rota: ActivatedRoute = inject(ActivatedRoute);
  casaServico: LocalCasasService = inject(LocalCasasService);
  casasLocal: ContratoCasas | undefined;

  constructor(){
    const numID = Number(this.rota.snapshot.params['id']);
    this.casasLocal = this.casaServico.buscarPorID(numID);
  }
}
