import { Component } from '@angular/core';
// Import Hero Object from Hero Interface
import { Hero } from '../hero';

// Import HEROES Array from mock-heroes
import { HEROES } from '../mock-heroes';

// Import hero service
import { HeroService } from '../hero.service';

@Component({
  // Properties
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// Run the following commands
export class HeroesComponent {
  constructor(private heroService: HeroService) {}
  // Heroes Array
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
