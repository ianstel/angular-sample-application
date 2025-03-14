import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../../assets/mock-heroes';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-heroes',
  standalone: false,
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'

})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero? : Hero

  onSelect(hero: Hero): void {
   
    this.selectedHero = hero
  }
}


