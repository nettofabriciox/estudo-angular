import { Component } from '@angular/core';
import { CardsCasasComponent } from '../cards-casas/cards-casas.component';
import { ContratoCasas } from '../contrato-casas';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsCasasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  listaContratoCasas: ContratoCasas = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `/assets/12.jpg`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
