import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero/hero";
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Our Tour Of Heroes';
  // heroes = ['Guts', 'Zoro', 'Vegeta', 'Luffy']

  heroes: Hero[];
  

  selectedHero = null;
  // selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(data => this.heroes = data);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  constructor(private heroService: HeroService){}

}
