import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardsCasasComponent } from '../cards-casas/cards-casas.component';
import { ContratoCasas } from '../contrato-casas';
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
  filtroLocalCasas: ContratoCasas []| undefined;

  constructor(){
    this.casaServico.buscarTodasCasas().then((casas: ContratoCasas[]) =>{
      this.listaContratoCasas = casas;
      this.filtroLocalCasas = casas;
    }
  );
  }

  filterResults(text: string) {
    if (!text) {
      this.filtroLocalCasas = this.listaContratoCasas;
      return;
    }
    this.filtroLocalCasas = this.listaContratoCasas?.filter((casas) =>
      casas?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
