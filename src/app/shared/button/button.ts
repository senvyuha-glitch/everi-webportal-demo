import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() buttonValue!: { text: string; link: string; classname: string };

  ngonInit() {
    console.log('buttonValue', this.buttonValue);
    this.buttonValue = this.buttonValue
      ? this.buttonValue
      : { text: 'Click Me', link: '#', classname: 'primaryBtn' };
  }
}
