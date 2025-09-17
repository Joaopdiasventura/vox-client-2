import { Component, inject } from '@angular/core';
import { ButtonNav } from '../../shared/components/buttons/button-nav/button-nav';
import { ButtonGroup } from "../../shared/components/buttons/button-group/button-group";
import { CardResult } from '../../shared/components/cards/card-result/card-result';
import { ButtonSimple } from "./components/button-simple/button-simple";
import { Router } from '@angular/router'; 
import { Inject } from '@angular/core';
@Component({
  selector: 'app-home-page',
  imports: [ButtonNav, ButtonGroup, CardResult, ButtonSimple],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
private route = inject(Router);

public navigateToHistory(): void {
  this.route.navigate(['view','history-page']);
}

}
