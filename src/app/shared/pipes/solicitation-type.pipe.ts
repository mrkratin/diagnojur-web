import { Pipe, PipeTransform } from '@angular/core';
import { SolicitationTypeEnum, solicitationTypes } from '../models';

export type SolicitationTypePipeArgs = 'description' | 'abstract';

@Pipe({
  name: 'solicitationType'
})
export class SolicitationTypePipe implements PipeTransform {
  transform(value: SolicitationTypeEnum, args: SolicitationTypePipeArgs = 'description'): any {
    let aux: string;
    solicitationTypes.forEach(type => {
      if (type.value === value) {
        aux = args === 'abstract' ? type.abstract : type.description;
      }
    });
    return aux ? aux : value;
  }
}
