import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  cardsArr = [
    { title: 'Fintech', content: 'Complete suite of financial, casino loyalty and compliance products' , image: 'https://www.everi.com/wp-content/uploads/2025/06/fintech1.png'},
    { title: 'Digital', content: 'Digital offers a state-of-the-art server-based gaming solution' , image: 'https://www.everi.com/wp-content/uploads/2025/06/digital1.png' },
    { title: 'Mobile', content: 'The BeOn™ platform helps create unique customer experiences across the casino floor or venue footprint' , image: 'https://www.everi.com/wp-content/uploads/2025/06/mobile1.png' },
    { title: 'Games', content: 'Compelling and distinct game content' , image: 'https://www.everi.com/wp-content/uploads/2025/06/games1.png' }
  ];

  constructor() { }

}
