import { Component, Input } from '@angular/core';
import { CardGroupChose } from '../card-group-chose/card-group-chose';

@Component({
  selector: 'app-card-alert',
  imports: [CardGroupChose],
  templateUrl: './card-alert.html',
  styleUrl: './card-alert.scss'
})
export class CardAlert {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() group!: string;
}
