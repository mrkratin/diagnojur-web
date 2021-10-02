import { SolicitationTypeEnum } from '../../shared/models';

export interface Payment {
  id: number;
  amount: number;
  discount?: number;
  solicitationType: SolicitationTypeEnum;
  discountCoupon: string;
  iugu: string;
  paymentLink: string;
  solicitation: number;
  processNumber: string;
}
