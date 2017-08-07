import { Component } from '@angular/core';

import { Navlink as NavLink } from '../navlink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent {

  public NavLinks: NavLink[] = [
    new NavLink('/heroes', 'Heroes')
  ];

  constructor() { }



}
