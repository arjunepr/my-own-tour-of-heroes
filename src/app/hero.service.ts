import { Injectable } from '@angular/core';

import { Hero } from './hero/hero';
import { HEROES } from './hero/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  // TODO: Get Heroes data.
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 500);
    });
  }
}
