import { R } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  imports: [RouterLink, CommonModule],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.scss',
})
export class Dropdown {
  @Input() items: { label: string; route?: string }[] = [];
}
