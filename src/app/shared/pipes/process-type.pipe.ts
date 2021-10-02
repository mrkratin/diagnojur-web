import { Pipe, PipeTransform } from '@angular/core';
import { ProcessTypeEnum, processTypes } from '../models';

@Pipe({
  name: 'processType'
})
export class ProcessTypePipe implements PipeTransform {
  transform(value: ProcessTypeEnum, args?: any): any {
    let aux: string;
    processTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
