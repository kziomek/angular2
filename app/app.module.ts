import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent} from "./app.component";
import { HeroesComponent}  from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import './rxjs-extensions';
import {HeroSearchComponent} from "./hero-search.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule

  ],
  declarations: [ AppComponent, DashboardComponent, HeroesComponent, HeroDetailComponent, HeroSearchComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroService ]
})
export class AppModule { }

