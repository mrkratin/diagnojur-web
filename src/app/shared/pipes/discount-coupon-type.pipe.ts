import { Pipe, PipeTransform } from '@angular/core';
import { DiscountCouponTypeEnum, discountCouponTypes } from '../models';

@Pipe({
  name: 'discountCouponType'
})
export class DiscountCouponTypePipe implements PipeTransform {
  transform(value: DiscountCouponTypeEnum, args?: any): any {
    let aux: string;
    discountCouponTypes.forEach(type => {
      if (type.value === value) {
        aux = type.description;
      }
    });
    return aux ? aux : value;
  }
}
