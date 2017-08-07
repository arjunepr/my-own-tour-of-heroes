import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { HeroService } from './hero.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroItemComponent } from './hero-item/hero-item.component';

const RouterConfig = RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    NavbarComponent,
    DashboardComponent,
    HeroItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterConfig
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
