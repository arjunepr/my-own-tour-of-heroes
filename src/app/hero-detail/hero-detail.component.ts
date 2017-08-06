import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.styl']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    // private hero: Hero
  ) { }

  ngOnInit() {
  }

}
