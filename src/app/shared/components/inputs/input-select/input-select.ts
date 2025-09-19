import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-input-select',
  imports: [CommonModule],
  templateUrl: './input-select.html',
  styleUrl: './input-select.scss'
})
export class InputSelect {
@Input() public inputValue: string = '';
@Input() public isOptionsVisible: boolean = false;
@Input() public placeholder: string = 'Selecione uma opção';

public onClickOption(option: string): void {
    this.inputValue = option;
    this.isOptionsVisible = false;
}
public onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
}

public onClickInput(): void {
    this.isOptionsVisible = !this.isOptionsVisible;
}
}