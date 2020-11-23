
import { MaterialModule } from './shared/material/material.module';
import { CommonsModule } from './commons/commons.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ex01Component } from './ex01/ex01.component';
import { Ex02Component } from './ex02/ex02.component';
import { Ex03Component } from './ex03/ex03.component';
import { Ex02DetailComponent } from './ex02-detail/ex02-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex01Component,
    Ex02Component,
    Ex03Component,
    Ex02DetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonsModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
