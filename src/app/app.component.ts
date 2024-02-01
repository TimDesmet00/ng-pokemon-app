import { Component } from '@angular/core';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    FormsModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    RouterModule
  ],
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {}