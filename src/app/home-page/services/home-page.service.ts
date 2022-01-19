import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  isNavMobile$ = new BehaviorSubject<boolean>(false);
  isNavMobileSub = this.isNavMobile$.asObservable();
  constructor() { }
}
