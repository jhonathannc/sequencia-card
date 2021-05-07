import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage
{

  constructor() {}

  cards = [
    {imagem:'sword.png'},
    {imagem:'axe.png'},
    {imagem:'shield.png'},
    {imagem:'bow.png'},
    {imagem:'potion.png',}, 
    {imagem:'trap.png'}
  ]
      

  iniciarJogo () 
  {
        this.resetaCartasNaMao()

        var tmp, current, top = this.cards.length;
        let imgCarta, handBot, handPlayer
         

            //<EMABARALHA CARTAS DO ARRAY>
                if(top) while(--top) 
                  {
                     current = Math.floor(Math.random() * (top + 1));
                     tmp = this.cards[current];
                     this.cards[current] = this.cards[top];
                     this.cards[top] = tmp;
                  }
            //</EMABARALHA>

            //<DISTRIBUI CARTAS>

                   handPlayer= this.cards.slice(0,3)
                   handBot = this.cards.slice(3,6)

            //</DISTRIBUI CARTAS>
                  
            //<COLOCA A IMAGEM DA CARTA NA LISTA>
                  handPlayer.forEach((carta) =>
                      {                            
                          imgCarta = this.criaCartaNaMao(carta)
                          const div = document.getElementById("id");
                          div.appendChild(imgCarta); 
                         
                      })         
            //</COLOCA A IMAGEM DA CARTA NA LISTA> 

            
                 
    }
 
 criaCartaNaMao (carta) 
  {
    let img = document.createElement('img')
    img.setAttribute('src', `/assets/cards/${carta.imagem}`)
    // img.style.maxWidth='110%'
    img.style.width='55px'
    img.onclick = function selecionaCarta() {

      let selectCard = carta.imagem
      let vezdeJogar = true

      if(vezdeJogar){

        let jogada = document.querySelector("#pJogada");
        jogada.setAttribute('src', `/assets/cards/${selectCard}`);
      }
          
    }
    
    return img
  }

 
 resetaCartasNaMao () 
  {
    for (var carta = 1; carta <= 6 ; carta++)
     {
       let gridCarta = document.getElementById("id");

       if(gridCarta != null)
         gridCarta.innerHTML = ''
     }
  }
}


