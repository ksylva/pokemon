import {Component, Input, OnInit} from '@angular/core';
import {PokemonDetails} from '../_models/pokemon';
import {PokeSharedInfoService} from '../_services/poke-shared-info.service';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css']
})
export class PokeDetailsComponent implements OnInit {

  @Input()
  detail!: PokemonDetails;

  constructor(private sharedInfo: PokeSharedInfoService) { }

  ngOnInit(): void {
    this.sharedInfo.getValue().subscribe(e => console.log(`Selected pokemon id is: ${e}`));
  }

}
