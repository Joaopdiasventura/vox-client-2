import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-page',
  imports: [],
  templateUrl: './button-page.html',
  styleUrl: './button-page.scss'
})
export class ButtonPage {
  @Input() previousPage!: string;
  @Input() nextPage!: string;

  @Output() previousClicked = new EventEmitter<void>();
  @Output() nextClicked = new EventEmitter<void>();

  onPrevious() {
    this.previousClicked.emit();
  }

  onNext() {
    this.nextClicked.emit();
  }
}
