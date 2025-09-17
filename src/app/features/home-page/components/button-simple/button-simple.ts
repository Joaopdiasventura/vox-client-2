import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-simple',
  imports: [],
  templateUrl: './button-simple.html',
  styleUrl: './button-simple.scss'
})
export class ButtonSimple {
  @Input() type!: string;
  @Input() text!: string;


  public iconPath : Record<string, string> = {
    seeSection: 'assets/svg/see-section-icon-red.svg',
    seeResults: 'assets/svg/trophy-red.svg',
  };
}