import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomComponent } from './custom/custom.component';
import { Program1Component } from './program1/program1.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule
  ],
  declarations: [
    AppComponent, CustomComponent, Program1Component, EventsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

