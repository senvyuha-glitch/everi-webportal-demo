import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { Carousel } from '../../../shared/carousel/carousel';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule, Carousel],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  bannerArr = [
    { image: 'https://img.freepik.com/free-vector/you-win-banner-casino-lottery-game-win_107791-15787.jpg?t=st=1760082826~exp=1760086426~hmac=a37b88ba7041f60ce1dfe20c0cc26d514f7f66396dfa652ce8229dc52efda376&w=2000', alt: 'Fintech Banner' },
    { image: 'https://img.freepik.com/premium-vector/online-casino-invitation-banner-website-with-button-slot-machine-casino-roulette-poker-chips-playing-cards-red-scene-with-yellow-neon-ring-background_7993-7691.jpg?w=2000', alt: 'Digital Banner' },
    { image: 'https://img.freepik.com/premium-psd/midnight-casino-banner_1029561-785.jpg?w=2000', alt: 'Mobile Banner' }
  ];
  
  cardsArr = [
    { title: 'Fintech', content: 'Complete suite of financial, casino loyalty and compliance products' , image: 'https://www.everi.com/wp-content/uploads/2025/06/fintech1.png'},
    { title: 'Digital', content: 'Digital offers a state-of-the-art server-based gaming solution' , image: 'https://www.everi.com/wp-content/uploads/2025/06/digital1.png' },
    { title: 'Mobile', content: 'The BeOn™ platform helps create unique customer experiences across the casino floor or venue footprint' , image: 'https://www.everi.com/wp-content/uploads/2025/06/mobile1.png' },
    { title: 'Games', content: 'Compelling and distinct game content' , image: 'https://www.everi.com/wp-content/uploads/2025/06/games1.png' }
  ];

  constructor() { }

}
