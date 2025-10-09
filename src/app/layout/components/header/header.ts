import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { Menu } from '../../../features/components/menu/menu';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSlideToggleModule,Menu],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor() { }
  
  toggleSidenav() {
  }
}
