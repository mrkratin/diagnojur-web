export enum PaymentTypeEnum {
  BILLET = 'BILLET',
  CREDIT_CARD = 'CREDIT_CARD'
}

export interface PaymentType {
  code: number;
  value: PaymentTypeEnum;
  description: string;
}

export const paymentTypes: PaymentType[] = [
  { code: 0, value: PaymentTypeEnum.BILLET, description: 'Boleto' },
  { code: 1, value: PaymentTypeEnum.CREDIT_CARD, description: 'Cartão de Crédito' }
];
