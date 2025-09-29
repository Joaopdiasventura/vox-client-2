import { Component, inject } from '@angular/core';
import { ButtonNav } from '../../shared/components/buttons/button-nav/button-nav';
import { ButtonGroup } from "../../shared/components/buttons/button-group/button-group";
import { CardGroup } from '../../shared/components/cards/card-group/card-group';
import { ButtonSimple } from "./components/button-simple/button-simple";
import { Router } from '@angular/router'; 
import { Inject } from '@angular/core';
@Component({
  selector: 'app-home-page',
  imports: [ButtonNav, ButtonGroup, ButtonSimple, CardGroup],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {
private route = inject(Router);

public navigateToHistory(): void {
  this.route.navigate(['view','history-page']);
}

}
