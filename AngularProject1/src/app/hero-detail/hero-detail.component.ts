import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { MatCardModule } from '@angular/material/card'

import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-hero-detail',
  standalone: false,
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',

})
export class HeroDetailComponent {
  selectedHero?: Hero
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.selectedHero = hero);
  }
  goBack(): void {
    this.location.back();
  }
}
