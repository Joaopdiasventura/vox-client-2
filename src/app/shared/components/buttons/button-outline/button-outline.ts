import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-outline',
  imports: [],
  templateUrl: './button-outline.html',
  styleUrl: './button-outline.scss'
})
export class ButtonOutline {
@Input() text: string = '';
}
