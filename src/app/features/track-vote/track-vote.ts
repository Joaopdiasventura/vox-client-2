import { Component } from '@angular/core';
import { InputSelect } from "../../shared/components/inputs/input-select/input-select";
import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { CardCandidate } from "../../shared/components/cards/card-candidate/card-candidate";
import { CardGroup } from "../../shared/components/cards/card-group/card-group";
@Component({
  selector: 'app-track-vote',
  imports: [InputSelect, CardCandidate, CardGroup],
  templateUrl: './track-vote.html',
  styleUrl: './track-vote.scss'
})
export class TrackVote  implements OnInit{
private activeRoute = inject(ActivatedRoute);
public idGroup!:string |null;
 public ngOnInit() :void{
  this.idGroup = this.activeRoute.snapshot.paramMap.get('idGroup')
    this.activeRoute.paramMap.subscribe(p => this.idGroup = p.get('idGroup'))
}
}
