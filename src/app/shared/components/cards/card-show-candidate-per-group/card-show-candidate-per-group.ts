import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-show-candidate-per-group',
  imports: [CommonModule],
  templateUrl: './card-show-candidate-per-group.html',
  styleUrl: './card-show-candidate-per-group.scss'
})
export class CardShowCandidatePerGroup {
  @Input() image!: string;
  @Input() groupName!: string;
  @Input() participant!: string;
  @Input() typeImage!: string;
}
