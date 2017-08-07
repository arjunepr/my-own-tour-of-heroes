import { Injectable } from '@angular/core';

import { Hero } from './hero/hero';
import { HEROES } from './hero/mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  // TODO: Get Heroes data.
  getHeroes(): Hero[] {
    return HEROES;
  }
}
