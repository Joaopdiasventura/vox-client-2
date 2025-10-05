import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-group-chose',
  imports: [],
  templateUrl: './card-group-chose.html',
  styleUrl: './card-group-chose.scss'
})
export class CardGroupChose {
   @Input() group!: string;
}
