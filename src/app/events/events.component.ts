import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
   <button appHighlight (click)="onClickMe()">Click me!</button>
   {{clickMessage}}

   <button (click)="onClickMe2('sathish')">No! .. Click me!</button>
   {{clickMessage2}}

   <h4>Give me some keys!</h4>
   key up <input (keyup)="onKey($event)"> <p>{{values}}</p>

   <h4>Give me some keys!</h4>
   <input #sathish (keyup)="onKeyValue(sathish)"><p>{{keyValues}}</p>


   <h4>Type away! Press [enter] when done.</h4>
   <input #enter (keyup.enter)="onEnter(enter.value)"> <p>{{value}}</p>

   <h4> enter and blur method</h4>
   <input #blu (keyup.enter)="update(blu.value)" (blur)="update(blu.value)"> <p>{{blurValue}}</p>

   <!--    <h4> key up and click method ways</h4>
   <input #keyUpp (keyup)="0"> <p>{{keyUpp.value}}</p>
   <button on-click="onSave()">on-Save</button>
   <button (click)="onSave()">onSave</button>

   event Binding: <input [value]="name" (input)="name=$event.target.value"> {{name}}

   <h4>Add new heroes </h4>
   <input #newHero (keyup.enter)="addHero(newHero.value)"  (blur)="addHero(newHero.value); newHero.value=' '">
   <button (click)="addHero(newHero.value)">Add</button>
    <div *ngFor="let hero of heroes">{{hero}}</div>
-->
   `
  ,
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  constructor() { }
  clickMessage = '';
  clickMessage2 = '';
  clicks = 1;
  values = '';
  keyValues = '';
  value = '';
  blurValue = '';
  name = 'sathish';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  /* click component */
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
  onClickMe2(event: string) {

   // const evtMsg = event ? ' Event target is ' + event.target.tagName : '';
    // this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
    this.clickMessage2 = event;
  }

  /*key up component*/
/* onKey(event: any) { // without event type info
   this.values += event.target.value + ' | ';
  // this.values = this.values + event.target.value + ' | ';
 } */

  onKey(event: KeyboardEvent) { // with keyboard event type info
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
  onKeyValue(event: any) {  // here value is string
    this.keyValues += event.value + ' | ';
  }

  onEnter(value: string) { this.value = value; }

  update(value: string) { this.blurValue = value; }

  onSave() {  alert('clicked on save button'); }


  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}




