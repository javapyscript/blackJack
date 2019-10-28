import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  cardNumber:string;

  @Input('cardURL')
  cardURL:string;

  constructor() { }

  ngOnInit() {
  }

}
