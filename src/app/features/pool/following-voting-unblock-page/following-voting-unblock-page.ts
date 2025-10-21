import { Component } from '@angular/core';
import { CardFollowingVoting } from '../../../shared/components/cards/card-following-voting/card-following-voting';
import { ButtonStandart } from '../../../shared/components/buttons/button-standart/button-following-voting/button-standart';


@Component({
  selector: 'app-following-voting-unblock-page',
  imports: [CardFollowingVoting, ButtonStandart],
  templateUrl: './following-voting-unblock-page.html',
  styleUrl: './following-voting-unblock-page.scss'
})
export class FollowingVotingUnblockPage {

}
