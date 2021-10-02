import { Pipe, PipeTransform } from '@angular/core';
import { PaymentTypeEnum, paymentTypes } from '../models';

@Pipe({
  name: 'paymentType'
})
export class PaymentTypePipe implements PipeTransform {
  transform(value: PaymentTypeEnum, args?: any): any {
    let aux: string;
    paymentTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
