export enum SolicitationStatusEnum {
  PENDING_PAYMENT = 'PENDING_PAYMENT',
  PENDING_ANALYST = 'PENDING_ANALYST',
  PENDING_DIAGNOSIS = 'PENDING_DIAGNOSIS',
  PENDING_REPLY = 'PENDING_REPLY',
  DIAGNOSTIC_PROVIDED = 'DIAGNOSTIC_PROVIDED',
  REPLY_PROVIDED = 'REPLY_PROVIDED',
  FINALIZED = 'FINALIZED',
  CANCELED = 'CANCELED'
}

export interface SolicitationStatus {
  code: number;
  value: SolicitationStatusEnum;
  description: string;
}

export const solicitationStatus: SolicitationStatus[] = [
  { code: 0, value: SolicitationStatusEnum.PENDING_PAYMENT, description: 'Aguardando pagamento' },
  { code: 1, value: SolicitationStatusEnum.PENDING_ANALYST, description: 'Aguardando Analista' },
  { code: 2, value: SolicitationStatusEnum.PENDING_DIAGNOSIS, description: 'Aguardando Diagnóstico' },
  { code: 3, value: SolicitationStatusEnum.PENDING_REPLY, description: 'Aguardando Réplica' },
  { code: 4, value: SolicitationStatusEnum.DIAGNOSTIC_PROVIDED, description: 'Diagnóstico fornecido' },
  { code: 5, value: SolicitationStatusEnum.REPLY_PROVIDED, description: 'Réplica fornecida' },
  { code: 6, value: SolicitationStatusEnum.FINALIZED, description: 'Finalizado' },
  { code: 7, value: SolicitationStatusEnum.CANCELED, description: 'Cancelado' }
];

export const solicitationStatusEnum: SolicitationStatusEnum[] = [
  SolicitationStatusEnum.PENDING_PAYMENT,
  SolicitationStatusEnum.PENDING_ANALYST,
  SolicitationStatusEnum.PENDING_DIAGNOSIS,
  SolicitationStatusEnum.PENDING_REPLY,
  SolicitationStatusEnum.DIAGNOSTIC_PROVIDED,
  SolicitationStatusEnum.REPLY_PROVIDED,
  SolicitationStatusEnum.FINALIZED,
  SolicitationStatusEnum.CANCELED
];
