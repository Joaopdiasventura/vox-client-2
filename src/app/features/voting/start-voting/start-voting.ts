import { Component } from '@angular/core';
import { InputSelect } from "../../../shared/components/inputs/input-select/input-select";
import { CardGroup } from "../../../shared/components/cards/card-group/card-group";
import { Checkbox } from "../../../shared/components/inputs/checkbox/checkbox";
import { ButtonOutline } from "../../../shared/components/buttons/button-outline/button-outline";

@Component({
  selector: 'app-start-voting',
  imports: [InputSelect, CardGroup, Checkbox, ButtonOutline],
  templateUrl: './start-voting.html',
  styleUrl: './start-voting.scss'
})
export class StartVoting {

}
