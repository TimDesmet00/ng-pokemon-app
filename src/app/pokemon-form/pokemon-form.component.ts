import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    CommonModule,
    
  ],
  templateUrl: './pokemon-form.component.html',
  styles: ``
})
export class PokemonFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // pokemonTypesList
  }

  hasTypes() {

  }

  selectType() {

  }

  onSubmit() {

  }

}
