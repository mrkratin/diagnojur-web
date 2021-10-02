import { Pipe, PipeTransform } from '@angular/core';
import { documentStatus, DocumentStatusEnum } from '../models';

@Pipe({
  name: 'documentStatus'
})
export class DocumentStatusPipe implements PipeTransform {
  transform(value: DocumentStatusEnum, args?: any): any {
    let aux: string;
    documentStatus.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
