export enum TransferRequestAvailabilityStatusEnum {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  FINISHED = 'FINISHED',
  CANCELLED = 'CANCELLED'
}

export interface TransferRequestAvailabilityStatus {
  code: number;
  value: TransferRequestAvailabilityStatusEnum;
  description: string;
}

export const transferRequestAvailabilitiesStatus: TransferRequestAvailabilityStatus[] = [
  { code: 0, description: 'Pendente', value: TransferRequestAvailabilityStatusEnum.PENDING },
  { code: 0, description: 'Processando', value: TransferRequestAvailabilityStatusEnum.PROCESSING },
  { code: 2, description: 'Finalizado', value: TransferRequestAvailabilityStatusEnum.FINISHED },
  { code: 3, description: 'Cancelado', value: TransferRequestAvailabilityStatusEnum.CANCELLED }
];
