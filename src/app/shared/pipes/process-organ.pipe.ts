import { Pipe, PipeTransform } from '@angular/core';
import { ProcessOrganEnum, processOrgans } from '../models';

@Pipe({
  name: 'processOrgan'
})
export class ProcessOrganPipe implements PipeTransform {
  transform(value: ProcessOrganEnum, args?: any): any {
    let aux: string;
    processOrgans.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
