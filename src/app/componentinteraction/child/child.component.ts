import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() hero: Hero;
  @Input('master') masterName: string;

  constructor() {
    console.log(this.hero);
    console.log(this.masterName);
  }

  ngOnInit() {
    console.log(this.hero);
    console.log(this.masterName);
  }

}
