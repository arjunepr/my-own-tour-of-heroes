import { Component, Input } from '@angular/core';
import { Hero } from "../hero/hero";

@Component({
  selector: 'hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.styl']
})
export class HeroItemComponent {

  @Input()
  public hero: Hero;

  constructor() { }

}
