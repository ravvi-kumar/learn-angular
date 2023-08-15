import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Comp1 } from 'src/app/comp1/comp1.component';
import { Comp1Module } from 'src/app/comp1/comp1.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Comp1Module],
  providers: [],
  bootstrap: [AppComponent, Comp1],
})
export class AppModule {}
