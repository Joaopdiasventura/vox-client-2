import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-name',
  imports: [],
  templateUrl: './input-name.html',
  styleUrl: './input-name.scss'
})
export class InputName {
  @Input() title!: string;
  @Input() placeholder!: string;
}
