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
    this.cardData.gameActive = true;
    this.cardData.getRandomCard('user');
    this.cardData.getRandomCard('dealer');
    this.cardData.getRandomCard('user');
    
    this.cardData.wallet -= this.cardData.bet;
    if(this.cardData.userScore > 21){
      this.cardData.gameResult = "Bust";
      
      this.cardData.reset();
    }
  }

  

}
