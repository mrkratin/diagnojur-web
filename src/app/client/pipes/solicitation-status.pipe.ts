import { Pipe, PipeTransform } from '@angular/core';
import { solicitationStatus, SolicitationStatusEnum } from '../models';

@Pipe({
  name: 'solicitationStatus'
})
export class SolicitationStatusPipe implements PipeTransform {
  transform(value: SolicitationStatusEnum, args?: any): any {
    let aux: string;
    solicitationStatus.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
