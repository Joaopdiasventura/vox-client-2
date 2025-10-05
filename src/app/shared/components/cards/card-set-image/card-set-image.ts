import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-set-image',
  imports: [],
  templateUrl: './card-set-image.html',
  styleUrl: './card-set-image.scss',
})

export class CardSetImage {
  @Input() title!: string;
  @Input() image!: string;

  get imageName(): string {
    if (!this.image) return '';
    const parts = this.image.split(/[/\\]/); 
    return parts.pop() || '';
  }
}