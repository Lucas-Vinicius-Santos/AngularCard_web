import { Component, OnInit } from '@angular/core';
import { CardModel } from '../model/CardModel';
import { CardApiService } from '../services/card-api.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {

  tiltSettings = {
    max: 25,
    speed: 200,
    glare: true,
    "max-glare": .4
  }
  
  cards: Array<any> = new Array;
  card: CardModel = new CardModel();
  display = 'none';

  constructor(private cardService: CardApiService) { }

  ngOnInit(): void {
      this.getCards();
  }

  getCards() {
    this.cardService.getAllCards().subscribe(cards => {
      this.cards = cards;
    }, err => {
      console.log('Erro ao listar cards', err)
    });
  }

  toggleModal(card) {
    if (this.display == 'none') {
      this.display = 'block';
      this.card = card;
    } else {
      this.display = 'none';
      this.getCards();
    }
  }

  editCard() {
    this.cardService.editCard(this.card).subscribe();
    this.toggleModal( new CardModel() )
    this.getCards();
  }
}
