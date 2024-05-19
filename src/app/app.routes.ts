import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardsCasasDetalhesComponent } from './cards-casas-detalhes/cards-casas-detalhes.component';



export const routes: Routes = [
    {path:'', component: HomeComponent, title: 'Home Page'},
    {path:'detalhes/:id', component: CardsCasasDetalhesComponent, title: 'Detalhes cartoes'},
];
