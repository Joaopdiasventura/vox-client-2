import { Component } from '@angular/core';
import { CardFollowingVoting } from '../../shared/components/cards/card-following-voting/card-following-voting';
import { ButtonFollowingVoting } from '../../shared/components/buttons/button-following-voting/button-following-voting/button-following-voting';


@Component({
  selector: 'app-following-voting-unblock-page',
  imports: [CardFollowingVoting, ButtonFollowingVoting],
  templateUrl: './following-voting-unblock-page.html',
  styleUrl: './following-voting-unblock-page.scss'
})
export class FollowingVotingUnblockPage {

}
