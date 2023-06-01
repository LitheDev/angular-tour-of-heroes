import { Component } from '@angular/core';

@Component({
  // Properties
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// To be imported in AppModule
export class HeroesComponent {

  // Add hero property for a hero called Windstorm
  hero = 'Windstorm';
}
