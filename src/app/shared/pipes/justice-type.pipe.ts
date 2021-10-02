import { Pipe, PipeTransform } from '@angular/core';
import { JusticeTypeEnum, justiceTypes } from '../models';

@Pipe({
  name: 'justiceType'
})
export class JusticeTypePipe implements PipeTransform {
  transform(value: JusticeTypeEnum, args?: any): any {
    let aux: string;
    justiceTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
