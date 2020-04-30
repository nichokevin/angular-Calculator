import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HasilComponent } from './hasil/hasil.component';

import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
const ROUTES: Routes=[
  {path:'hasil', component: HasilComponent},
  {path:'home', component: HomeComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot(ROUTES)],
  declarations: [ AppComponent, HelloComponent, HasilComponent, HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
