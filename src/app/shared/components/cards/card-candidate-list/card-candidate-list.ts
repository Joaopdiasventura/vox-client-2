import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-candidate-list',
  imports: [CommonModule],
  templateUrl: './card-candidate-list.html',
  styleUrl: './card-candidate-list.scss'
})
export class CardCandidateList {
  @Input() image!: string;
  @Input() name!: string;
  @Input() participant!: string;
  @Input() typeImage!: string;
  @Input() showViewBtn!: boolean;
}
