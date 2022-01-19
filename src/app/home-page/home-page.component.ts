import {Component, OnInit} from '@angular/core';
import {HomePageService} from "./services/home-page.service";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  listItemNav = [
    'home',
    'about',
    'services',
    'contact'
  ]
  isNavM!:boolean
  constructor(private isNavMobile: HomePageService) { }

  ngOnInit(): void {
    this.isNavMobile.isNavMobileSub.subscribe(e => {
      this.isNavM = e;
    });
  }

  isNav() {
    this.isNavM = true;
    this.isNavMobile.isNavMobile$.next(true);
  }
}
