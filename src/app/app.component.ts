import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  template: `
  <h1> Hello {{title}}</h1>

  <h2>My favorite hero is: {{selectedhero.name}} {{selectedhero.designation}}</h2>

  <p [style.font-size.px]="40">Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes; let i = index">
      <span title =herois:{{hero.name}} (click)="selectedHero(hero)" [style.color]="'red'"
       [style.background-color]="'yellow'" style="cursor:pointer">{{i}}{{ hero.name | uppercase }} {{hero.designation}}</span>
      </li>
  </ul>
 <p *ngIf="heroes.length > 3" [ngStyle]="setMyStyles()">There are many heroes!</p>

   <div [hidden]="selectedhero"> You selected <span [ngStyle]="myStyles">{{selectedhero.id}}-{{selectedhero.name}}</span></div>
   <div *ngIf="!selectedhero"> You selected <span [ngStyle]="myStyles">{{selectedhero.id}}-{{selectedhero.name}}</span></div>


   <div [ngStyle]="{'background-color': 'lime','font-size': '20px','font-weight': 'bold'}"> hello herors ..how are you</div>


    <div [ngStyle]="{'background-color':selectedhero.name === 'angular' ? 'green' : 'red' }">Angular Color Added</div>

     <div [ngStyle]="{'color':getColor('Red')}"> Red ngstyle method called</div>
    <div [ngStyle]="{'color':getColor('Yellow')}"> yellow ngstyle method called</div>
    <div [ngStyle]="{'color':getColor('Blue')}"> Blue ngstyle method called</div>

`,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'Tour of Heroes';
  myStyles = {
    'background-color': 'blue',
    'font-size': '20px',
    'font-weight': 'bold'
  };

  selectedhero: Hero;
  // heroes = [
  //   new Hero(1, 'Windstorm'),
  //   new Hero(13, 'Bombasto'),
  //   new Hero(15, 'Magneta'),
  //   new Hero(20, 'Tornado')
  // ];
  heroes: Hero[] = [
    { id: 1, name: 'kotha', designation: 'software' },
    { id: 2, name: 'chary', designation: 'software' },
    { id: 3, name: 'sathish', designation: 'software' },
     { id: 4, name: 'raju', designation: 'software' },
    { id: 5, name: 'angular', designation: 'software' },
    { id: 6, name: 'sessions', designation: 'software' }];

  constructor() {
    this.selectedhero = this.heroes[0];
  }
  selectedHero(hero: Hero) {
    this.selectedhero = hero;
  }
  setMyStyles() {
    const styles = {
      'background-color': 'red',
      'font-weight': 'bold'
    };
    return styles;
  }

  getColor(color) { // red
    switch (color) {
      case 'Red':
        return 'red';
      case 'Blue':
        return 'blue';
      case 'Yellow':
        return 'yellow';
    }
  }




}

