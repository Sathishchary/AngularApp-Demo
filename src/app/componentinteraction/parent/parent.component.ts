import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../hero.service';
import { Hero } from '../../models/hero';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  heroes: Hero[];
  master = 'Master';
  constructor(public heroService: HeroService) { }

  ngOnInit() {
   this.heroes = this.heroService.heroes;
  }

}
