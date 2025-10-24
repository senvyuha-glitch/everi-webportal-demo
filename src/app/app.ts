import { AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Home } from './features/components/home/home';
import { Header } from './layout/components/header/header';
import { Footer } from './layout/components/footer/footer';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App  implements OnInit,AfterViewInit {
  protected readonly title = signal('everi');

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  ngOnInit(): void {
    console.log('App initialized');
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue('--fontFamily')
      .trim();
    console.log(value);
  }

  ngAfterViewInit(): void {
    console.log('App view initialized');
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue('--fontFamily')
      .trim();
    console.log(value);
  }
}
