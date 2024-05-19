import { Component, inject } from '@angular/core';
import { CardsCasasComponent } from '../cards-casas/cards-casas.component';
import { ContratoCasas } from '../contrato-casas';
import { CommonModule } from '@angular/common';
import { LocalCasasService } from '../local-casas.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsCasasComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  casaServico: LocalCasasService = inject(LocalCasasService);
  listaContratoCasas: ContratoCasas []| undefined;

  constructor(){
    this.listaContratoCasas = this.casaServico.buscarTodasCasas();
  }
}
