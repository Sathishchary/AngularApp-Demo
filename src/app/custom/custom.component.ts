import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-custom',
  template: `
  <img src='{{imagePath}}'>
  <img [src]="imagePath">

  <button disabled='{{isDisabled}}'>Try Me</button>

  <button [disabled]='isDisabled'>Try Me</button>


  <input type="text" [disabled]='isDisabled'>

  <p>The sum of 1 + 1 is {{"sum is "+ 1 + 1}}</p>
  <p>The sum of 1 - 10 is {{1 - 10}}</p>


  <button bind-disabled='isDisabled'>Try Me</button>

  <div>{{hacked}}</div>

  <div [innerHtml]="badHtml"></div>

  <input [(ngModel)]="name"> {{name}}

  `,
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  imagePath = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

  name = 'MyName';

  hacked = 'Hello <script>alert("You are just been Hacked or not");</script> first binding.';

  badHtml: string = 'Hello <a href="www.google.com"></a><script>alert("You are just been Hacked or not");</script>' +
  'bad html code it not allowing use string binding.';

  isDisabled = false;
  constructor() { }

  ngOnInit() {
  }

}
