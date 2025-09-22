import { Component } from '@angular/core';
import { CardFollowingVoting } from '../../shared/components/cards/card-following-voting/card-following-voting';
import { ButtonFollowingVoting } from '../../shared/components/buttons/button-following-voting/button-following-voting/button-following-voting';
import { CardAlertDoneVote } from '../../shared/components/cards/card-alert-done-vote/card-alert-done-vote';


@Component({
  selector: 'app-following-voting-block-page',
  imports: [CardFollowingVoting, ButtonFollowingVoting, CardAlertDoneVote],
  templateUrl: './following-voting-block-page.html',
  styleUrl: './following-voting-block-page.scss'
})
export class FollowingVotingBlockPage {

}
