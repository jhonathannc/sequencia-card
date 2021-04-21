import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  

  constructor() {
  }

  cards = [
    {
      id: 1,
      imagem: 'carta-arco.png'
    },
    {
      id: 2,
      imagem: 'carta-armadilha.png'
    },
    {
      id: 3,
      imagem: 'carta-escudo.png'
    },
    {
      id: 4,
      imagem: 'carta-espada.png'
    },
    {
      id: 5,
      imagem: 'carta-machado.png',
    },
    {
      id: 6,
      imagem: 'carta-pocao.png'
    }
  ]
  
  iniciarJogo () {

    this.resetaCartasNaMao()

    //contando carta de 1 a 6
    for (var gridCarta = 1; gridCarta <= 6 ; gridCarta++) {
      let idCarta = Math.floor(Math.random() * 5) + 1

      this.cards.forEach((carta) => {
        if (carta.id == idCarta) {
          let imgCarta = this.criaCartaNaMao(carta)
          document.querySelector(`.carta-${gridCarta}`).append(imgCarta) 
        }
      })
      
    }
  }

  criaCartaNaMao (carta) {
    let img = document.createElement('img')
    img.setAttribute('src', `/assets/cards/${carta.imagem}`)
    // img.setAttribute('width', '50%')
    // img.setAttribute('height', '50%')
    img.style.maxWidth='160%'
    img.style.width='90px'

    return img
  }

  resetaCartasNaMao () {
    for (var carta = 1; carta <= 6 ; carta++) {
      let gridCarta = document.querySelector(`.carta-${carta}`)

      if(gridCarta != null)
        gridCarta.innerHTML = ''
    }
  }

}
