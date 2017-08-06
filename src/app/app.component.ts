import { Component } from '@angular/core';

import { Hero } from './hero/hero';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'Our Tour Of Heroes';
  // heroes = ['Guts', 'Zoro', 'Vegeta', 'Luffy']

  heroes = [
    new Hero(1, 'Guts'),
    new Hero(2, 'Zoro'),
    new Hero(3, 'Vegeta'),
    new Hero(4, 'Luffy')
  ];

  selectedHero = null;
  // selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
