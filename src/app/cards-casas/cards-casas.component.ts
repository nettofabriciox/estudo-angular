import { Component, Input } from '@angular/core';
import { ContratoCasas } from '../contrato-casas';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards-casas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards-casas.component.html',
  styleUrl: './cards-casas.component.css'
})
export class CardsCasasComponent {
 @Input() listaCasas!: ContratoCasas;
}
