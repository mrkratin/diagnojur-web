export enum DiscountCouponTypeEnum {
  PERCENTAGE = 'PERCENTAGE',
  MONEY = 'MONEY'
}

export interface DiscountCouponType {
  code: number;
  value: DiscountCouponTypeEnum;
  description: string;
}

export const discountCouponTypes: DiscountCouponType[] = [
  { code: 0, value: DiscountCouponTypeEnum.PERCENTAGE, description: 'Porcentagem' },
  { code: 1, value: DiscountCouponTypeEnum.MONEY, description: 'Dinheiro' }
];
