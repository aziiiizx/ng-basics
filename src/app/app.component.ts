import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ListaProdottiComponent } from "./components/lista-prodotti/lista-prodotti.component";
import { TitleComponent } from "./components/title/title.component";
import { Prodotto } from './models/Prodotto';

@Component({
  selector: 'app-root',
  imports:
    [
      RouterOutlet,
     // HeaderComponent,
      FooterComponent,
      ListaProdottiComponent,
      TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-basics';
  // Aggiungi un array di prodotti
   testo_titolo_prodotti = "pluto"
  prodotti_novita: Prodotto[] = [
{
  nome: "bici",
  desc: "Nera", 
  prezzo: 100,
  foto: "https://picsum.photos/300/200",
  
},
{
  nome: "Friggitrice",
  desc: "Ad aria", 
  prezzo: 80,
  foto: "https://picsum.photos/300/200",

}
  ]
   prodotti_suggerrimenti: Prodotto[] = [
{
  nome: "Scooter",
  desc: "Nera", 
  prezzo: 100,
  foto: "https://picsum.photos/300/200",
  
},
{
  nome: "Chitarra",
  desc: "Ad aria", 
  prezzo: 80,
  foto: "https://picsum.photos/300/200",

}
,{
  nome: "Asspirapolvere",
  desc: "Ad aria", 
  prezzo: 800,
  foto: "https://picsum.photos/300/200",

}
   ]
}
