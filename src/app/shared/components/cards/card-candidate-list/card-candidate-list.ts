import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-candidate-list',
  imports: [],
  templateUrl: './card-candidate-list.html',
  styleUrl: './card-candidate-list.scss'
})
export class CardCandidateList {
  @Input() image!: string;
  @Input() groupName!: string;
  @Input() participant!: string;
}
