import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { viewChild } from '@angular/core';

type CardType = 'update' | 'group' | 'result';


@Component({
  selector: 'app-card-group',
  imports: [CommonModule],
  templateUrl: './card-group.html',
  styleUrl: './card-group.scss'
})
export class CardGroup {
  @Input() public typeCard!: CardType

    public cardGroup = viewChild('cardGroup', {
    read: TemplateRef,
  });
    public cardGroupResult = viewChild('cardGroupResult', {
    read: TemplateRef,
  });
    public cardGroupUpdate = viewChild('cardGroupUpdate', {
    read: TemplateRef,
  });


public  cardTemplate(): TemplateRef<unknown> | undefined{
switch(this.typeCard){
  case 'update':
    return this.cardGroupUpdate();
  case 'group':
    return this.cardGroup();
  case 'result':
    return this.cardGroupResult();
}
 }
}
