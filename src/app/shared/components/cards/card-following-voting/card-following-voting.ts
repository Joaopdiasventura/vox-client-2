import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-following-voting',
  standalone: true,    
  imports: [CommonModule],
  templateUrl: './card-following-voting.html',
  styleUrl: './card-following-voting.scss'
})
export class CardFollowingVoting {
  @Input() model: 'block' | 'unblock' = 'block'; 
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() image!: string; 
}