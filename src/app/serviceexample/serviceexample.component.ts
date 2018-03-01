import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../models/hero';

@Component({
  selector: 'app-serviceexample',
  templateUrl: './serviceexample.component.html',
  styleUrls: ['./serviceexample.component.css']
})
export class ServiceexampleComponent implements OnInit {


  selectedHero: Hero;

  heroes: any;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    alert(this.heroService.heroMessage);
    this.heroService.heroMessage = 'service example component';
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): any {
    // this.heroes = this.heroService.getHeroes();

    this.heroService.getHeroes().subscribe(
      (result) => {
           this.heroes = result;
           console.log(this.heroes);
      });
  }
}
