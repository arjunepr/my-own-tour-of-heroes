import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero/hero";
import { HeroService } from '../hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.styl'],
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  

  selectedHero = null;
  // selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService){}

}
