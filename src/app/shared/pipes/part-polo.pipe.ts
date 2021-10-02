import { Pipe, PipeTransform } from '@angular/core';
import { PartPoloEnum, partPolos } from '../models';

@Pipe({
  name: 'partPolo'
})
export class PartPoloPipe implements PipeTransform {
  transform(value: PartPoloEnum, args?: any): any {
    let aux: string;
    partPolos.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
