import { Pipe, PipeTransform } from '@angular/core';
import {Pokemon} from '../_models/pokemon';

@Pipe({
  name: 'filterPokemonPipe',
  pure: false
})
export class FilterPokemonPipePipe implements PipeTransform {
  // value is the data source
  // property is the fields on which make the search
  // searchString is the user input
  transform(value: Pokemon[], property: string, searchString: string): any {
    if (typeof value !== 'undefined') { // value is not null
      return value.filter((e) => {
        return e.name?.toLowerCase().indexOf(searchString.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }

}
