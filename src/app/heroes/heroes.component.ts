import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero : Hero = {
  //   id : 1,
  //   name : "Shakir"
  // }
  
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(this);
  }
  // heroes = HEROES;
  heroes : Hero[];
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
    
  constructor(private heroService: HeroService
  ) {
  }


  ngOnInit() {
    this.getHeroes();
  }

} 