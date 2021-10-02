import { Pipe, PipeTransform } from '@angular/core';
import { transferRequestStatus, TransferRequestStatusEnum } from '../models';

@Pipe({
  name: 'transferRequestStatus'
})
export class TransferRequestStatusPipe implements PipeTransform {
  transform(value: TransferRequestStatusEnum, args?: any): any {
    let aux: string;
    transferRequestStatus.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
