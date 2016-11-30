import {Component, OnInit} from "@angular/core";
import { HeroService } from './hero.service';
import {Router} from "@angular/router";

export class Hero {
  id:number;
  name:string;
}


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
})


export class HeroesComponent implements OnInit {

  constructor(private router: Router,
              private heroService: HeroService) { }

  heroes: Hero[];


  selectedHero: Hero;

  ngOnInit():void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
