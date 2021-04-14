import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import {FormsModule} from '@angular/forms';
import { FilterPokemonPipePipe } from './_pipes/filter-pokemon-pipe.pipe';
import {PokeApiService} from './_services/poke-api.service';
import {HttpClientModule} from '@angular/common/http';
import { PokeDetailsComponent } from './poke-details/poke-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    FilterPokemonPipePipe,
    PokeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    PokeApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
