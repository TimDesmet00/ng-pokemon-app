import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
import { CommonModule } from '@angular/common';
import { BorderCardDirective } from '../border-card.directive';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';


@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    BorderCardDirective,
    PokemonTypeColorPipe
  ],
  templateUrl: './list-pokemon.component.html',
  styles: './list-pokemon.component.scss'
})
export class ListPokemonComponent {

  pokemonList: Pokemon[] = POKEMONS;
  
}