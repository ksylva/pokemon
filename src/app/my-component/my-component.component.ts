import { Component, OnInit } from '@angular/core';
import {Pokemon, PokemonDetails} from '../_models/pokemon';
import {PokeApiService} from '../_services/poke-api.service';
import {PokeSharedInfoService} from '../_services/poke-shared-info.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  id?: string;
  selectedPokemonId!: string;
  searchPokemon = '';
  pokemonId?: number;
  pokeDetail!: PokemonDetails;

  pokemons: Pokemon[] = [];

  constructor(private pokeService: PokeApiService, private sharedInfo: PokeSharedInfoService) { }

  ngOnInit(): void {

    this.getAllPokemons();
  }

  go() {
    if (this.selectedPokemonId !== '') {
      this.getPokemon();
    }
  }

  getPokemon() {
    this.pokeService.getSinglePokemon(this.selectedPokemonId)
      .subscribe((data) => {
        console.log(`The pokemon details: ${data.name}`);
        this.sharedInfo.setValue(this.selectedPokemonId);
        this.pokeDetail = data;
      });
  }

  getAllPokemons() {
    this.pokeService.getPokemonList()
      .subscribe((data) => {
        // console.log(data.results);
        data.results.forEach((e, index) => {
          this.pokemons.push(new Pokemon('' + (index + 1), e.name));
        });
      });
  }

}
