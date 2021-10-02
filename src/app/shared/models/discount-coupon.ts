import { DiscountCouponTypeEnum } from './discount-coupon-type';

export interface DiscountCoupon {
  id: number;
  code: string;
  type: DiscountCouponTypeEnum;
  amountUsed: number;
  totalAmount: number;
  discount: number;
  validity: Date;
}
