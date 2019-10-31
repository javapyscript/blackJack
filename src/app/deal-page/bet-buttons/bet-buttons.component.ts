import { Component, OnInit } from '@angular/core';
import { CardDataService } from 'src/app/services/card-data.service';

@Component({
  selector: 'app-bet-buttons',
  templateUrl: './bet-buttons.component.html',
  styleUrls: ['./bet-buttons.component.scss']
})
export class BetButtonsComponent implements OnInit {
  isVisibleMiddle = false;


  constructor(public cardData: CardDataService) { }

  ngOnInit() {
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.placeBet();
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  hit(){
    this.cardData.getRandomCard('user');
    this.cardData.playAudio("./assets/audio/deal.wav");
    if(this.cardData.userScore > 21){
      this.cardData.gameResult = "Bust";
      this.cardData.wallet -= this.cardData.bet;
      this.cardData.playAudio('./assets/audio/zapsplat_multimedia_game_die_lose_life_24882.mp3');
      //this.cardData.reset();
    }
  }

  stay(){
    while (this.cardData.dealerScore < 17){
      this.cardData.getRandomCard('dealer');
    }
      if(this.cardData.dealerScore < 22 && this.cardData.dealerScore > this.cardData.userScore){
        this.cardData.gameResult = "You lose!";
        this.cardData.wallet -= this.cardData.bet;
        this.cardData.playAudio('./assets/audio/zapsplat_multimedia_game_die_lose_life_24882.mp3');
        
      }
      else if(this.cardData.dealerScore < 22 && this.cardData.dealerScore < this.cardData.userScore){
        this.cardData.gameResult = "You win!";
        this.cardData.wallet += this.cardData.bet;
        this.cardData.playAudio('./assets/audio/little_robot_sound_factory_Jingle_Win_Synth_06.mp3');
      }
      else if(this.cardData.dealerScore < 22 && this.cardData.dealerScore === this.cardData.userScore){
        this.cardData.gameResult = "Draw!";
        //this.cardData.wallet += this.cardData.bet;
      }
      else if(this.cardData.dealerScore > 21){
        this.cardData.gameResult = "You win!";
        this.cardData.wallet += this.cardData.bet;
        this.cardData.playAudio('./assets/audio/little_robot_sound_factory_Jingle_Win_Synth_06.mp3');
      }

      if(this.cardData.wallet < this.cardData.bet){
        this.cardData.bet = this.cardData.wallet;
      }
    
    
  }

  reset(){
    this.cardData.reset();
    this.showModalMiddle();
  }

  placeBet(){
    if(this.cardData.bet == null){
      return;
    }
    this.cardData.gameActive = true;
    this.cardData.getRandomCard('user');
    this.cardData.getRandomCard('dealer');
    this.cardData.getRandomCard('user');
    this.cardData.playAudio("./assets/audio/198234__everythingsounds__credit-card-swipe.wav");
    //this.cardData.wallet -= this.cardData.bet;
    if(this.cardData.userScore > 21){
      this.cardData.gameResult = "Bust";
      
      this.cardData.reset();
    }
  }

  validateInput(event){
    if (event.target.validity.valid){
      if(event.target.value > this.cardData.wallet){
        event.target.value = '';
      }
      if(event.target.value === ''){
        event.target.value = '';
      }
      
    }
    else{
      event.target.value = '';
    }
      
    
    
  }

}
