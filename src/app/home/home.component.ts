import { Component, OnInit } from '@angular/core';

import { CardApiService } from '../services/card-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiltSettings = {
    max: 25,
    speed: 200,
    glare: true,
    "max-glare": .4
  }

  cards: Array<any> = new Array;

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

}
