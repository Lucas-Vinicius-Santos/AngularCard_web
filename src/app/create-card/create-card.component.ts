import { Component, OnInit } from '@angular/core';
import { CardModel } from '../model/CardModel';
import { CardApiService } from '../services/card-api.service'

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  card = new CardModel();

  constructor(private cardService: CardApiService) { }

  ngOnInit(): void {
  }

  cadastrarCard() {
    this.cardService.registerCard(this.card).subscribe();
    this.card = new CardModel();
    console.log(this.card)
  }
}
