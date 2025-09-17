import { AsideBar } from "../../shared/components/aside-bar/aside-bar";
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, signal, computed, inject } from '@angular/core';
import { OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { filter } from "rxjs";
import { NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-view-page',
  imports: [AsideBar, RouterOutlet],
  templateUrl: './view-page.html',
  styleUrl: './view-page.scss'
})
export class ViewPage  {
public pathImg !: string
public titlePage !: string





}
