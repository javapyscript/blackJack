import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.scss']
})
export class MainAreaComponent implements OnInit {

  constructor(public cardData: CardDataService) { }

  ngOnInit() {
  }

  hit(){
    this.cardData.getRandomCard('user');
    if(this.cardData.userScore > 21){
      this.cardData.gameResult = "Bust";
      //this.cardData.reset();
    }
  }

  stay(){
    while (this.cardData.dealerScore <= 17){
      this.cardData.getRandomCard('dealer');
    }
      if(this.cardData.dealerScore < 22 && this.cardData.dealerScore > this.cardData.userScore){
        this.cardData.gameResult = "You lose!";
        this.cardData.wallet -= this.cardData.bet;
        
      }
      else if(this.cardData.dealerScore < 22 && this.cardData.dealerScore < this.cardData.userScore){
        this.cardData.gameResult = "You win!";
        this.cardData.wallet += this.cardData.bet;
      }
      else if(this.cardData.dealerScore < 22 && this.cardData.dealerScore === this.cardData.userScore){
        this.cardData.gameResult = "Draw!";
        //this.cardData.wallet += this.cardData.bet;
      }
      else if(this.cardData.dealerScore > 21){
        this.cardData.gameResult = "You win!";
        this.cardData.wallet += this.cardData.bet;
      }
    
    
  }

  reset(){
    this.cardData.reset();
  }

}
