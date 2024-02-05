import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';

export const routes: Routes = [
    { path : 
       'edit/pokemon/:id', loadComponent: () => 
        import('./edit-pokemon/edit-pokemon.component').then(module => module.EditPokemonComponent) 
    },
    { path :
        'pokemons', loadComponent: () =>
        import('./list-pokemon/list-pokemon.component').then(module => module.ListPokemonComponent)
     },
    { path :
        'pokemon/:id', loadComponent: () =>
        import('./detail-pokemon/detail-pokemon.component').then(module => module.DetailPokemonComponent)
    },
    { path :'', redirectTo: 'pokemons', pathMatch: 'full' },
    { path :
        '**', loadComponent: () => 
        import('./page-not-found/page-not-found.component').then(module => module.PageNotFoundComponent)
    }
];
