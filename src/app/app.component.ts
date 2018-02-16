import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
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

