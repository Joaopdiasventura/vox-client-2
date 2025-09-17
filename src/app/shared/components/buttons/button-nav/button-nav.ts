import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-button-nav',
  imports: [],
  templateUrl: './button-nav.html',
  styleUrl: './button-nav.scss'
})
export class ButtonNav {
@Input() type!: string;


public iconPath: Record<string, string> = {
  startVoting: 'assets/svg/vote-icon-red.svg',
  addSection: 'assets/svg/add-section-red.svg',
  trackVoting: 'assets/svg/track-voting-red.svg',
  authorizeVoting: 'assets/svg/authorize-voting-red.svg'
}

}