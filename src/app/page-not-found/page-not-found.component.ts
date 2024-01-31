import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  template: `
    <div class='page404'>
      <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png"/>
      <h1>Hey, cette page n'existe pas !</h1>
      <a href="/pokemons" class="btn">
        Retourner à l' accueil
      </a>
    </div>
  `,
  styles: ``
})
export class PageNotFoundComponent {

}
