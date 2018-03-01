import { Component } from '@angular/core';
import { HeroService } from './hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  constructor(public hero: HeroService) {
    this.hero.heroMessage = 'stratapps services ';

  }
  // eventBinding = false;
  // lifeCycleHook = true;

  // showEventBinding() {
  //  this.eventBinding = true;
  //  this.lifeCycleHook = false;
  // }
  // showLifeCycleHooks() {
  //   this.eventBinding = false;
  //   this.lifeCycleHook = true;
  // }
  programExample = false;
  prgram() {
    this.programExample = true;
  }
}

