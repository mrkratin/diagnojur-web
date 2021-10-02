import { Pipe, PipeTransform } from '@angular/core';
import { PaymentStatusEnum, paymentStatuses } from '../models';

@Pipe({
  name: 'paymentStatus'
})
export class PaymentStatusPipe implements PipeTransform {
  transform(value: PaymentStatusEnum, args?: any): any {
    let aux: string;
    paymentStatuses.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
