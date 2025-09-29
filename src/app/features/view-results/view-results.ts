import { Component } from '@angular/core';
import { CardCandidate } from '../../shared/components/cards/card-candidate/card-candidate';
import { CardGroup } from "../../shared/components/cards/card-group/card-group";

@Component({
  selector: 'app-view-results',
  imports: [CardCandidate, CardGroup],
  templateUrl: './view-results.html',
  styleUrl: './view-results.scss'
})
export class ViewResults {

}
