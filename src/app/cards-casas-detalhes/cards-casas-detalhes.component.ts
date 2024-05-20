import { Component, inject } from '@angular/core';
import { LocalCasasService } from '../local-casas.service';
import { ContratoCasas } from '../contrato-casas';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards-casas-detalhes',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './cards-casas-detalhes.component.html',
  styleUrl: './cards-casas-detalhes.component.css'
})
export class CardsCasasDetalhesComponent {
 
  rota: ActivatedRoute = inject(ActivatedRoute);
  casaServico: LocalCasasService = inject(LocalCasasService);
  casasLocal: ContratoCasas | undefined;
  
  applyForm = new FormGroup({
    primeiroNome: new FormControl(''),
    ultimoNome: new FormControl(''),
    email: new FormControl(''),
  });
  
  constructor(){
    const numID = Number(this.rota.snapshot.params['id']);
    this.casaServico.buscarPorID(numID).then((casaID) => {
      this.casasLocal = casaID;
    });
  }

  submeterApp(){
    this.casaServico.submeterApp(
      this.applyForm.value.primeiroNome ?? '',
      this.applyForm.value.ultimoNome ?? '',
      this.applyForm.value.email ?? '',
    )
  }
}
