import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonTypeColorPipe } from '../pokemon-type-color.pipe';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PokemonTypeColorPipe
    
  ],
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon;
  types: string[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypesList();
  }

  hasType(type:string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string) {
    const isChecked : boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.pokemon.types.push(type);
    } else{
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }
  }

  isTypesValid(type: string): boolean {

    if(this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }

    if(this.pokemon.types.length > 2 && !this.hasType(type)) {
      return false;
    }

    return true;
  }

  onSubmit() {
    console.log('Submit form !');
    this.router.navigate(['/pokemon', this.pokemon.id]);
  }

}
