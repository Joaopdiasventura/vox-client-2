import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-button-group',
  imports: [],
  templateUrl: './button-group.html',
  styleUrl: './button-group.scss'
})
export class ButtonGroup {
@Input() public textButton!: string;
}
