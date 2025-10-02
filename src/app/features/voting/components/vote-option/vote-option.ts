import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type typeOption = 'candidato' | 'nulo'
  

@Component({
  selector: 'app-vote-option',
  imports: [CommonModule],
  templateUrl: './vote-option.html',
  styleUrl: './vote-option.scss'
})
export class VoteOption {
@Input() type!: typeOption 
@Input() optionText !:string
}
