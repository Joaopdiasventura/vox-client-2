import { Component } from '@angular/core';
import { VoteOption } from "../components/vote-option/vote-option";
import { ButtonOutline } from "../../../shared/components/buttons/button-outline/button-outline";

@Component({
  selector: 'app-voting-page',
  imports: [VoteOption, ButtonOutline],
  templateUrl: './voting-page.html',
  styleUrl: './voting-page.scss'
})
export class VotingPage {

}
