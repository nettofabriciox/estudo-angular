import { Injectable } from '@angular/core';
import { ContratoCasas } from './contrato-casas';

@Injectable({
  providedIn: 'root'
})
export class LocalCasasService {
  
  url = 'http://localhost:3000/locations';



 async buscarTodasCasas(): Promise<ContratoCasas[]> {
    const dado = await fetch(this.url);
    return (await dado.json())?? [];
  }

async buscarPorID(id: number): Promise<ContratoCasas | undefined> {
  const data = await fetch(`${this.url}/${id}`);
  return (await data.json()) ?? {}; 
  }

  submeterApp(primeiroNome: string, ultimoNome: string, email: string){
    console.log(
      `Home app: ${primeiroNome}, ${ultimoNome}, ${email}`
    );
  }
}
