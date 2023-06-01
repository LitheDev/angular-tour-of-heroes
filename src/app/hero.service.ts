import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//
@Injectable({
  providedIn: 'root',
})
export class HeroService {

  // Defines heroService property and identifies it as the heroService injection site
  constructor(private heroService: HeroService) {}

  getHeroes(): Hero[] {
    return HEROES;
  }
}


