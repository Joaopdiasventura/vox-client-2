import { AsideBar } from "../../shared/components/aside-bar/aside-bar";
import { RouterOutlet, Router, ActivatedRoute, ActivationEnd } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { filter, map, startWith } from "rxjs";

@Component({
  selector: 'app-view-page',
  imports: [AsideBar, RouterOutlet],
  templateUrl: './view-page.html',
  styleUrls: ['./view-page.scss']
})
export class ViewPage implements OnInit  {
  private router = inject(Router)
  private route = inject(ActivatedRoute)
  public descriptionPage = ''
  public pathImg = ''
  public titlePage = ''

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(e => e instanceof ActivationEnd),
        startWith(null),
        map(() => {
          let r = this.route
          while (r.firstChild) r = r.firstChild
          return r.snapshot.data
        })
      )
      .subscribe(d => {
        this.titlePage = d?.['titlePage'] ?? ''
        this.descriptionPage = d?.['descriptionPage'] ?? ''
        this.pathImg = d?.['iconPath'] ?? ''
      })
  }
}
