import { Component } from '@angular/core';
import { CardFollowingVoting } from '../../../shared/components/cards/card-following-voting/card-following-voting';
import { ButtonStandart } from '../../../shared/components/buttons/button-standart/button-following-voting/button-standart';
import { CardAlertDoneVote } from '../../../shared/components/cards/card-alert-done-vote/card-alert-done-vote';


@Component({
  selector: 'app-following-voting-block-page',
  imports: [CardFollowingVoting, ButtonStandart, CardAlertDoneVote],
  templateUrl: './following-voting-block-page.html',
  styleUrl: './following-voting-block-page.scss'
})
export class FollowingVotingBlockPage {

}
