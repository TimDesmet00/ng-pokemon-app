import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';
import { PokemonService } from '../pokemon.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    AppModule,
    BorderCardDirective,
    PokemonTypeColorPipe,
    
  ],
  templateUrl: './list-pokemon.component.html',
  styles: ''
})
export class ListPokemonComponent implements OnInit{

  pokemonList: Pokemon[];

  constructor(
    private router: Router,
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemonList()
      .subscribe(pokemonList => this.pokemonList = pokemonList);
  }

  goToPokemon(pokemon: Pokemon) {
    this.router.navigate(['/pokemon', pokemon.id]);
  }
  
}
