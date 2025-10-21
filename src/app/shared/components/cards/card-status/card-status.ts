import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-status',
  imports: [CommonModule],
  templateUrl: './card-status.html',
  styleUrl: './card-status.scss'
})
export class CardStatus {
  @Input() title!: string;
  @Input() allowedVote!: string; 
  @Input() ballotBoxDevice!: string; 
  @Input() nullVote!: boolean;
  @Input() showExtraContainer!: boolean;

  get nullVoteString(): string {
     return this.nullVote === true ? 'SIM' 
       : this.nullVote === false ? 'NÃO' 
       : '';
  }
}
