import {Component, Input, OnInit} from '@angular/core';
import {HomePageService} from "../../services/home-page.service";

@Component({
  selector: 'app-nav-mobile',
  templateUrl: './nav-mobile.component.html',
  styleUrls: ['./nav-mobile.component.scss']
})
export class NavMobileComponent implements OnInit {
  @Input() listItem!: string[]
  constructor(private isNavMobile: HomePageService) { }

  ngOnInit(): void {
  }
  handleToggle(item:string) {
    this.isNavMobile.isNavMobile$.next(false)
  }

  handleExit() {
    this.isNavMobile.isNavMobile$.next(false)
  }

}
