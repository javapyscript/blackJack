import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../services/card-data.service';

@Component({
  selector: 'app-deal-page',
  templateUrl: './deal-page.component.html',
  styleUrls: ['./deal-page.component.scss']
})
export class DealPageComponent implements OnInit {

  availableCards = [];
  dealerCards = [];
  userCards = [];
  gameActive = false;
  userScore = 0;
  dealerScore = 0;

  constructor(public cardData: CardDataService) { }

  ngOnInit() {
    this.availableCards = this.cardData.allCards;
  }

  hitCard(){
    
    this.userCards.push(this.availableCards.splice(Math.floor(Math.random()*this.availableCards.length),1));
  }

  stayCard(){
    this.dealerCards.push(this.availableCards.splice(Math.floor(Math.random()*this.availableCards.length),1));
  }

  

}
