import { Component, OnInit } from '@angular/core';
import { CardApiService } from '../services/card-api.service';

@Component({
  selector: 'app-remove-card',
  templateUrl: './remove-card.component.html',
  styleUrls: ['./remove-card.component.css']
})
export class RemoveCardComponent implements OnInit {

  tiltSettings = {
    max: 25,
    speed: 200,
    glare: true,
    "max-glare": .4
  }
  cards: Array<any> = new Array;
  display = 'none';

  constructor(private cardService: CardApiService) { }

  ngOnInit(): void {
      this.getCards();
  }

  getCards() {
    this.cardService.listarCards().subscribe(cards => {
      this.cards = cards;
    }, err => {
      console.log('Erro ao listar cards', err)
    });
  }

  toggleModal() {
    if (this.display == 'none') {
      this.display = 'block'
    } else {
      this.display = 'none'
    }
  }
}
