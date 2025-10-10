import { Component } from '@angular/core';
import { CardComponent } from '../../../shared/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadership',
  imports: [CardComponent, CommonModule],
  templateUrl: './leadership.html',
  styleUrl: './leadership.scss'
})
export class Leadership {

  leaderships = [
    { image: 'https://www.everi.com/wp-content/uploads/2025/09/nick-update.jpg', title: 'Nick Khin', content: 'Interim IGT Chief Executive Officer and Chief Executive Officer, Gaming' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/07/gil.jpg', title: 'Gil Rotem', content: 'Chief Executive Officer, PlayDigital' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/07/darrens.jpg', title: 'Darren Simmons', content: 'Chief Executive Officer, Fintech' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/07/Fabio.jpg', title: 'Fabio Celadon', content: 'Chief Financial Officer' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/06/Tara.jpg', title: 'Tara Bustamante', content: 'Chief Transformation Officer' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/07/dan-c.jpg', title: 'Dan Ciccarelli ', content: 'Chief Information Officer' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/07/kateL.jpg', title: 'Kate Lowenhar-Fisher', content: 'Chief Compliance Officer' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/07/Roux.jpg', title: 'J.D. Roux', content: 'Chief People and Culture Officer' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/07/Dunn.jpg', title: 'Mark Dunn', content: 'Chief Legal Officer' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/07/Labay.jpg', title: 'Mark Labay', content: 'Senior Advisor, Integration' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/09/Andy-Hendrickson.jpg', title: ' Andy Hendrickson', content: 'Chief Technology Officer' },
    { image: 'https://www.everi.com/wp-content/uploads/2025/09/Jean-venneman.jpg', title: 'Jean Venneman', content: 'SVP of Global Studios' },
];

}
