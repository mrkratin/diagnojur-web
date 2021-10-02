import { Pipe, PipeTransform } from '@angular/core';
import { SolicitationSpecificTypeEnum, specificTypes } from '../models';

@Pipe({
  name: 'solicitationSpecificType'
})
export class SolicitationSpecificTypePipe implements PipeTransform {
  transform(value: SolicitationSpecificTypeEnum, args?: any): any {
    let aux: string;
    specificTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
