import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  signal,
  Signal,
  ɵunwrapWritableSignal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  @Input() images: { image: string; alt: string; space?: string; radius?: number }[] = [];
  currentIndex = 0;

  prev() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  next() {
    if (this.currentIndex < this.images.length - 1) this.currentIndex++;
  }
}
