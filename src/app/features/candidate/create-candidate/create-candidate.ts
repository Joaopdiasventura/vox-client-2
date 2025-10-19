import { Component } from '@angular/core';
import { InputName } from '../../../shared/components/inputs/input-name/input-name';
import { CardSetImage } from '../../../shared/components/cards/card-set-image/card-set-image';
import { ButtonStandart } from '../../../shared/components/buttons/button-standart/button-following-voting/button-standart';
import { CardShowCandidatePerGroup } from '../../../shared/components/cards/card-show-candidate-per-group/card-show-candidate-per-group';

@Component({
  selector: 'app-create-candidate',
  imports: [InputName, CardSetImage, ButtonStandart, CardShowCandidatePerGroup],
  templateUrl: './create-candidate.html',
  styleUrl: './create-candidate.scss'
})
export class CreateCandidate {

}
