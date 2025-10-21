import { Component } from '@angular/core';
import { CardSignInUp } from '../../../shared/components/cards/card-sign-in-up/card-sign-in-up';

@Component({
  selector: 'app-auth-page',
  imports: [CardSignInUp],
  templateUrl: './auth-page.html',
  styleUrl: './auth-page.scss'
})
export class AuthPage {

}
