import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { inject } from '@angular/core';
@Component({
  selector: 'app-aside-bar',
  imports: [],
  templateUrl: './aside-bar.html',
  styleUrl: './aside-bar.scss'
})
export class AsideBar {
private route = inject(Router);

public navigateToHome():void{
  this.route.navigate(['']);
}
}