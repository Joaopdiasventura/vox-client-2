import { Component } from '@angular/core';
import { InputName } from '../../shared/components/inputs/input-name/input-name';
import { CardSetImage } from '../../shared/components/cards/card-set-image/card-set-image';
import { CardStatus } from '../../shared/components/cards/card-status/card-status';
import { ButtonStandart } from '../../shared/components/buttons/button-standart/button-following-voting/button-standart';

@Component({
  selector: 'app-create-session',
  imports: [InputName, CardSetImage, CardStatus, ButtonStandart],
  templateUrl: './create-session.html',
  styleUrl: './create-session.scss'
})
export class CreateSession {

}
