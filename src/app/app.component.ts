import { Component, NgModule } from '@angular/core';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from './app.module';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  imports: [
    FormsModule,
    HttpClientModule,
    AppModule,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    RouterModule
  ],
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent {}