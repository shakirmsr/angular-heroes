import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { Hero } from './heroes';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  constructor(private messageService : MessageService ) { }
}