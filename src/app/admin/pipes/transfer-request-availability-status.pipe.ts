import { Pipe, PipeTransform } from '@angular/core';
import { transferRequestAvailabilitiesStatus, TransferRequestAvailabilityStatusEnum } from '../models';

@Pipe({
  name: 'transferRequestAvailabilityStatus'
})
export class TransferRequestAvailabilityStatusPipe implements PipeTransform {
  transform(value: TransferRequestAvailabilityStatusEnum, args?: any): any {
    let aux: string;
    transferRequestAvailabilitiesStatus.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
