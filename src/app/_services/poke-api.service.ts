import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {PokemonDetails, PokemonServiceRes} from '../_models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonServiceRes> {
    return this.http.get<PokemonServiceRes>(environment.apiUrl + 'pokemon');
  }

  getSinglePokemon(id: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(environment.apiUrl + 'pokemon/' + id);
  }
}
