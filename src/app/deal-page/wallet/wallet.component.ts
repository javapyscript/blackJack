import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  constructor(public cardData: CardDataService) { }

  ngOnInit() {
  }

  placeBet(){
    
    this.cardData.userCards.push(this.cardData.availableCards.splice(Math.floor(Math.random()*this.cardData.availableCards.length),1));
    this.cardData.dealerCards.push(this.cardData.availableCards.splice(Math.floor(Math.random()*this.cardData.availableCards.length),1));
    this.cardData.userCards.push(this.cardData.availableCards.splice(Math.floor(Math.random()*this.cardData.availableCards.length),1));
    this.cardData.gameActive = true;
  }

}
