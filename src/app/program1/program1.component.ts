import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program1',
  templateUrl: './program1.component.html',
  styleUrls: ['./program1.component.css']
})
export class Program1Component implements OnInit {
  selectedHero: any;
  heroes: any;
  heroname = '';
  constructor() {
    this.heroes = [
      { id: 1, name: 'kotha', designation: 'junior software' },
      { id: 2, name: 'chary', designation: 'hardware' },
      { id: 3, name: 'sathish', designation: 'software' },
      { id: 4, name: 'raju', designation: 'hardware' },
      { id: 5, name: 'angular', designation: 'software' },
      { id: 6, name: 'sessions', designation: 'developer' }];
  }
  showHero(hero: any) {
    this.selectedHero = hero;
    this.heroname = this.selectedHero.name;
  }

  ngOnInit() {
  }

}
