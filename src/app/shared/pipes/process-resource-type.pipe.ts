import { Pipe, PipeTransform } from '@angular/core';
import { ProcessResourceTypeEnum, processResourceTypes } from '../models';

@Pipe({
  name: 'processResourceType'
})
export class ProcessResourceTypePipe implements PipeTransform {
  transform(value: ProcessResourceTypeEnum, args?: any): any {
    let aux: string;
    processResourceTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
