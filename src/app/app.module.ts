import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { Program1Component } from './program1/program1.component';
import { EventsComponent } from './events/events.component';
import { StyleProgramComponent } from './style-program/style-program.component';
import { LifecyleComponent } from './lifecyle/lifecyle.component';
import { ServiceexampleComponent } from './serviceexample/serviceexample.component';
import { HighletDirective } from './directives/highlet.directive';
import { ColorComponent } from './directives/color/color.component';
import { StructuralComponent } from './structural/structural.component';

import { HeroService } from './hero.service';
import { ParentComponent } from './componentinteraction/parent/parent.component';
import { ChildComponent } from './componentinteraction/child/child.component';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    MomentModule,
    NgIdleKeepaliveModule.forRoot()
  ],
  declarations: [
    AppComponent, CustomComponent, Program1Component, EventsComponent, StyleProgramComponent,
     LifecyleComponent, ServiceexampleComponent, HighletDirective, ColorComponent, StructuralComponent, ParentComponent, ChildComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

