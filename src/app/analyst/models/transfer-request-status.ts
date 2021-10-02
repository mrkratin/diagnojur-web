export enum TransferRequestStatusEnum {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  DENIED = 'DENIED'
  // CANCELED = 'CANCELED',
}

export interface TransferRequestStatus {
  code: number;
  value: TransferRequestStatusEnum;
  description: string;
}

export const transferRequestStatus: TransferRequestStatus[] = [
  { code: 0, description: 'Pendente', value: TransferRequestStatusEnum.PENDING },
  { code: 1, description: 'Processando', value: TransferRequestStatusEnum.PROCESSING },
  { code: 2, description: 'Finalizado', value: TransferRequestStatusEnum.FINISHED },
  { code: 3, description: 'Negado', value: TransferRequestStatusEnum.DENIED }
  // {code: 4, description: 'Cancelado', value: TransferRequestStatusEnum.CANCELED},
];
