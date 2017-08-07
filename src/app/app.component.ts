import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  providers: [HeroService]
})
export class AppComponent {
  title = 'Our Tour Of Heroes';
  

  constructor(private heroService: HeroService){}

}
