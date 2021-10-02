import { DiscountCouponTypeEnum } from './discount-coupon-type';

export interface DiscountCouponCreate {
  code: string;
  type: DiscountCouponTypeEnum;
  totalAmount: number;
  validity: Date;
  discount: number;
}
