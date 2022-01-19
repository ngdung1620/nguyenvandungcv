import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-left',
  templateUrl: './nav-left.component.html',
  styleUrls: ['./nav-left.component.scss']
})
export class NavLeftComponent implements OnInit {
  @Input() listItem!: string[];
  targetedItem!: string;
  constructor() { }

  ngOnInit(): void {
    this.targetedItem = this.listItem[0];
  }

  handleClick(item: string) {
    this.targetedItem = item;
  }
}
