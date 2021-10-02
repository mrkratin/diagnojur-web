import { Pipe, PipeTransform } from '@angular/core';
import { DocumentTypeEnum, documentTypes } from '../../client/models';

@Pipe({
  name: 'documentType'
})
export class DocumentTypePipe implements PipeTransform {
  transform(value: DocumentTypeEnum, args?: any): any {
    let aux: string;
    documentTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
