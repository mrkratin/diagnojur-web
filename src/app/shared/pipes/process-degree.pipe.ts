import { Pipe, PipeTransform } from '@angular/core';
import { ProcessDegreeEnum, processDegrees } from '../models';

@Pipe({
  name: 'processDegree'
})
export class ProcessDegreePipe implements PipeTransform {
  transform(value: ProcessDegreeEnum, args?: any): any {
    let aux: string;
    processDegrees.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
