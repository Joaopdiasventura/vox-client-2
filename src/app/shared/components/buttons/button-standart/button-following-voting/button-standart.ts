import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-standart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-standart.html',
  styleUrls: ['./button-standart.scss']
})
export class ButtonStandart {
  @Input() type!: string;
  @Input() text!: string;


  public iconPath : Record<string, string> = {
    allowVote: 'assets/svg/allow-vote-red.svg',
    stopVoting: 'assets/svg/stop-voting-gray.svg',
    addButton: 'assets/svg/authorize-voting-red.svg',
  };
}
