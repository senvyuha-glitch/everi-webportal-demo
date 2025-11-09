import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CommonModule } from '@angular/common';
import { Carousel } from '../../../shared/carousel/carousel';
import { ArticleComponent } from '../../../shared/article/article.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, CommonModule, ArticleComponent],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  isPlaying = true;

  toggleVideo(video: HTMLVideoElement) {
    if (video.paused) {
      video.play();
      this.isPlaying = true;
    } else {
      video.pause();
      this.isPlaying = false;
    }
  }

  bannerArr = [
    {
      image:
        'https://img.freepik.com/free-vector/you-win-banner-casino-lottery-game-win_107791-15787.jpg?t=st=1760082826~exp=1760086426~hmac=a37b88ba7041f60ce1dfe20c0cc26d514f7f66396dfa652ce8229dc52efda376&w=2000',
      alt: 'Fintech Banner',
    },
    {
      image:
        'https://img.freepik.com/premium-vector/online-casino-invitation-banner-website-with-button-slot-machine-casino-roulette-poker-chips-playing-cards-red-scene-with-yellow-neon-ring-background_7993-7691.jpg?w=2000',
      alt: 'Digital Banner',
    },
    {
      image: 'https://img.freepik.com/premium-psd/midnight-casino-banner_1029561-785.jpg?w=2000',
      alt: 'Mobile Banner',
    },
  ];

  cardsArr = [
    {
      title: 'Fintech',
      content: 'Complete suite of financial, casino loyalty and compliance products',
      image: 'https://www.everi.com/wp-content/uploads/2025/06/fintech1.png',
    },
    {
      title: 'Digital',
      content: 'Digital offers a state-of-the-art server-based gaming solution',
      image: 'https://www.everi.com/wp-content/uploads/2025/06/digital1.png',
    },
    {
      title: 'Mobile',
      content:
        'The BeOn™ platform helps create unique customer experiences across the casino floor or venue footprint',
      image: 'https://www.everi.com/wp-content/uploads/2025/06/mobile1.png',
    },
    {
      title: 'Games',
      content: 'Compelling and distinct game content',
      image: 'https://www.everi.com/wp-content/uploads/2025/06/games1.png',
    },
  ];

  articlesArr = [
    {
      imageUrl: 'https://www.everi.com/wp-content/uploads/2025/05/beon.jpg',
      title: 'BeOn',
      subtitle: 'Join the Digital Revolution. Go Beyond with BeOn.',
      splitter: false,
      content:
        'Go beyond online any other mobile services platform by providing seamless integrations across the casino floor or venue footprint to create unique customer experiences with the leading mobile technology and advanced e-commerce platform for sports, hospitality, and the entertainment industry. Everi is inventing the future with casinos and venues, going beyond the intersection of innovation in thought and capability to build solutions outside of the traditional set of tools you see in the mobile space today. Along with integrations with over 150+ partners, we assist with your efforts across all touchpoints and segments by offering choice and convenience.',
      bgClass: '',
      contentPosition: 'right',
      buttonValue: { text: 'More About Leon', link: '#', classname: 'primaryBtn' },
    },
    {
      imageUrl: 'https://www.everi.com/wp-content/uploads/2025/05/jinz.jpg',
      title: 'Fire Lion™ Series',
      subtitle: '',
      splitter: true,
      content:
        'Volatile gambler style games with two base themes – Prosperity Queen™ and Prosperity King™ – that feature two distinct features within free spins. Six fiery orbs trigger traditional hold & spin bonus with opportunities for retriggers and jackpots. Land a lion in the hold & spin bonus to play the Fire Lion Bonus, an exciting nested feature that PAYS BIG!',
      bgClass: 'darkBlue',
      contentPosition: 'left',
      buttonValue: { text: 'More About Leon Series', link: '#', classname: 'secondaryBtn' },
    },
    {
      imageUrl: 'https://www.everi.com/wp-content/uploads/2025/05/beon.jpg',
      title: 'Everi way you want to play',
      subtitle: 'Now featuring over 100 engaging titles, including new progressive themes!',
      splitter: false,
      content:
        'Everi Digital offers a state-of-the art server-based gaming solution created to deliver unique, top-performing slot content to online operators worldwide. Our Spark™ Remote Game Server is built with operator configurability in mind, featuring an optimized technology that highlights game customization, technical stability, and speed to market. The Spark Remote Game Server enables us to deliver games to operators quickly, securely, and succinctly in a wide variety of ways.',
      bgClass: 'lightBlue',
      contentPosition: 'right',
      buttonValue: { text: 'More About Leon Series', link: '#', classname: 'secondaryBtn' },
    },
    {
      imageUrl: 'https://www.everi.com/wp-content/uploads/2025/05/jinz.jpg',
      title: 'Promo Games',
      subtitle: '',
      splitter: true,
      content:
        'Promotional games are crafted to boost player engagement and build loyalty through player-centric gameplay and enticing rewards. Our Trilogy lobby features over 270 titles with memorable characters, rich graphics and optimized content, accessible across all channels. These games can be tailored to fit specific marketing campaigns, enabling brands to create memorable experiences that encourage patrons to return. By integrating features like eReceipt, FlexRewards, Drawing Entries, Qualifications, Multipliers, and Time Based Participations, these games offer a fun and rewarding way for patrons to engage with the casino’s offerings.',
      bgClass: 'darkBlue',
      contentPosition: 'left',
      buttonValue: { text: 'More About Leon', link: '#', classname: 'secondaryBtn' },
    },
  ];
  constructor() {}
}
