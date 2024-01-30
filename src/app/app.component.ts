import { Component } from '@angular/core';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    ListPokemonComponent,
    DetailPokemonComponent,
    RouterModule
  ],
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {}