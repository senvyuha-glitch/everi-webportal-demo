import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './features/components/home/home';
import { Header } from './layout/components/header/header';
import { Footer } from './layout/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('everi');
}
