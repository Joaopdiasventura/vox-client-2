import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { inject } from '@angular/core';
import{ ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-aside-bar',
  imports: [],
  templateUrl: './aside-bar.html',
  styleUrl: './aside-bar.scss'
})
export class AsideBar {
private route = inject(Router);
private activeRoute = inject(ActivatedRoute);
public idGroup!:string |null;

public navigateToHome():void{
  this.route.navigate(['']);
}
public navigateToStartVotingPage():void{
  this.route.navigate(['view/start-voting']);
}
public navigateToTrackVoting():void{
  this.route.navigate(['view/track-vote']);
}

}