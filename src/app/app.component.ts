import { Component } from '@angular/core';

import { Hero } from './hero/hero';

@Component({
  selector: 'my-app',
  // templateUrl: './app.component.html',
  template: `
    <div class="content">
      <h1>{{title}}</h1>
      <h2>My favorite hero is {{hero}}</h2>
      <p>Heroes:</p>
      <ul>
        <li *ngFor="let hero of heroes">
          <h2>{{ hero.name }} details</h2>
          <div class="details">
            <p><label>id: </label>{{ hero.id }}</p>
            <p><label>name: </label>{{ hero.name }}</p>
          </div>
        </li>
      </ul>
      <p *ngIf="heroes.length > 3">There's quite a few heroes here.</p>
    </div>
  `,
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

  myHero = this.heroes[0];

}
