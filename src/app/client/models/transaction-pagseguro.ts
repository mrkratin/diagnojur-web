import { PaymentStatusEnum } from './payment-status';

export interface TransactionPagSeguro {
  id: number;
  code: string;
  paymentLink: string;
  type: string;
  status: PaymentStatusEnum;
  amount: number;
}
