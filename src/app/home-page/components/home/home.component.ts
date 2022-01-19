import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
//@ts-ignore
import Typewriter from 't-writer.js'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('tw') typewriteElement: any;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    const target = this.typewriteElement.nativeElement

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white'
    })

    writer
      .type("I'm a Developer")
      .rest(300)
      .changeOps({ deleteSpeed: 80 })
      .remove(9)
      .type('Designer')
      .rest(300)
      .remove(8)
      .type('Freelancer')
      .rest(300)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .clear()
      .start()
  }

}
