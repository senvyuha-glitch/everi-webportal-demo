import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Dropdown } from '../dropdown/dropdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, Dropdown, CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  showDropdown = false;
  digitalDropdownItems = [{ label: 'LEADERSHIP', route: '/leaderships' }];
}
