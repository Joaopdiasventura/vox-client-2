import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-following-voting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-following-voting.html',
  styleUrls: ['./button-following-voting.scss']
})
export class ButtonFollowingVoting {
  @Input() type!: string;
  @Input() text!: string;


  public iconPath : Record<string, string> = {
    allowVote: 'assets/svg/allow-vote-red.svg',
    stopVoting: 'assets/svg/stop-voting-gray.svg',
  };
}
