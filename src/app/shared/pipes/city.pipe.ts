import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../models';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {
  transform(city: City, uf: boolean = true): any {
    if (city) {
      return uf ? `${city.name} - ${city.uf}` : `${city.name}`;
    } else {
      return city;
    }
  }
}
