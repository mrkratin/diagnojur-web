import { Pipe, PipeTransform } from '@angular/core';
import { DocumentDeniedTypeEnum, documentDeniedTypes } from '../models';

@Pipe({
  name: 'documentDeniedType'
})
export class DocumentDeniedTypePipe implements PipeTransform {
  transform(value: DocumentDeniedTypeEnum, args?: any): any {
    let aux: string;
    documentDeniedTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
