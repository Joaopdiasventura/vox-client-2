import { Component } from '@angular/core';
import { VotingInput } from '../../../shared/components/inputs/voting-input/voting-input';
import { CardAlert } from '../../../shared/components/cards/card-alert/card-alert';

@Component({
  selector: 'app-folowing-voting-page',
  imports: [VotingInput, CardAlert],
  templateUrl: './folowing-voting-page.html',
  styleUrl: './folowing-voting-page.scss'
})
export class FollowingVotingPage {

}
