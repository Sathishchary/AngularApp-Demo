import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hero } from './models/hero';

@Injectable()
export class HeroService {

  constructor(public http: HttpClient) { }

  heroMessage: string;

  heroes: Hero[] = [
    { id: 1, name: 'kothae', designation: 'junior software' },
    { id: 2, name: 'charys', designation: 'hardware' },
    { id: 3, name: 'sathish', designation: 'software' },
    { id: 4, name: 'rajusss', designation: 'hardware' },
    { id: 5, name: 'angular', designation: 'software' },
    { id: 6, name: 'sessios', designation: 'developer' }];

  getHeroes() {
    return this.http.get('http://localhost:4300/assets/heros.json');
  }
  clearHeroes() {
    this.heroes = [];
  }

}
