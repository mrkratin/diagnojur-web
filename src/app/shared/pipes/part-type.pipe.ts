import { Pipe, PipeTransform } from '@angular/core';
import { PartTypeEnum, partTypes } from '../models';

@Pipe({
  name: 'partType'
})
export class PartTypePipe implements PipeTransform {
  transform(value: PartTypeEnum, args?: any): any {
    let aux: string;
    partTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
