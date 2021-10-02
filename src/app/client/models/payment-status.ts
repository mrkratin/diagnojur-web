export enum PaymentStatusEnum {
  INITIAL = 'INITIAL',
  WAITING_PAYMENT = 'WAITING_PAYMENT',
  IN_REVIEW = 'IN_REVIEW',
  APPROVED = 'APPROVED',
  AVAILABLE = 'AVAILABLE',
  IN_DISPUTE = 'IN_DISPUTE',
  RETURNED = 'RETURNED',
  CANCELLED = 'CANCELLED',
  SELLER_CHARGEBACK = 'SELLER_CHARGEBACK',
  CONTESTATION = 'CONTESTATION',
  PROCESSING_REFUND = 'PROCESSING_REFUND',
  UNRECOGNIZED = 'UNRECOGNIZED'
}

export interface PaymentStatus {
  code: number;
  value: PaymentStatusEnum;
  description: string;
}

export const paymentStatuses: PaymentStatus[] = [
  { code: 0, value: PaymentStatusEnum.INITIAL, description: 'Novo' },
  { code: 1, value: PaymentStatusEnum.WAITING_PAYMENT, description: 'Aguardando Pagamento' },
  { code: 2, value: PaymentStatusEnum.IN_REVIEW, description: 'Em Análise' },
  { code: 3, value: PaymentStatusEnum.APPROVED, description: 'Pago' },
  { code: 4, value: PaymentStatusEnum.AVAILABLE, description: 'Disponivel' },
  { code: 5, value: PaymentStatusEnum.IN_DISPUTE, description: 'Em Disputa' },
  { code: 6, value: PaymentStatusEnum.RETURNED, description: 'Devolvido' },
  { code: 7, value: PaymentStatusEnum.CANCELLED, description: 'Cancelado' },
  { code: 8, value: PaymentStatusEnum.SELLER_CHARGEBACK, description: 'Estornado' },
  { code: 9, value: PaymentStatusEnum.CONTESTATION, description: 'Contestação' },
  { code: 10, value: PaymentStatusEnum.PROCESSING_REFUND, description: 'Reembolso em Processamento' },
  { code: 11, value: PaymentStatusEnum.UNRECOGNIZED, description: 'Não Reconhecido' }
];
