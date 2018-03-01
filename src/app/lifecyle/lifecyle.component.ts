import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecyle',
  templateUrl: './lifecyle.component.html',
  styleUrls: ['./lifecyle.component.css']
})
export class LifecyleComponent implements OnInit, OnDestroy {

  sayHiya: number;

  constructor() {
    this.sayHiya = window.setInterval(() => console.log('hello'),  1000);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
     window.clearInterval(this.sayHiya);
  }


}
