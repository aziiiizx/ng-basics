import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Car } from "../../models/Car";
import { prodotto } from '../../models/Prodotto';
// import { ICcar } from "../../models/Car"; // se si usa interface

@Component({
  selector: 'app-header',
  imports: [LogoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nome: string = "aziz weslati ";//<= type inference
  anno: number = 22;
  car = { nome: "Mercedes", modello: "S-Class", }

  prodotto?: prodotto;
  bici?:prodotto ={
    id: 1,
    nome: "Bicicletta",
    prezzo: 120,
    inOfferta: false,
  }

  /* esempio() {
     let eta = 16
     let patentao = false;
     if (eta >= 18 && patentao) {
       console.log("puoi guidare");
     } else if (eta >= 18 && !patentao) {
       console.log("puoi guidare ma non hai la patente");
     } else if (eta < 18 && !patentao) {
       console.log("non puoi guidare");
     }
 
     patentao =eta >= 18 && patentao ? true : false;
   }*/

  esempio() {
    this.prodotto = {
      id: 1,
      nome: "Bicicletta",
      prezzo: 120,
      inOfferta: false,
    };

    let eta = 16;
    let patentao = false;
    if (eta >= 16) {
      patentao = true;
    } else {
      patentao = false;
    }
    patentao = eta >= 18 ? true : false; //  operatore ternario
    
  }
}





