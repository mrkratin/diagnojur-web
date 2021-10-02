export enum SolicitationReplyStatusEnum {
  PENDING = 'PENDING',
  FINISHED = 'FINISHED'
}

export interface SolicitationReplyStatus {
  code: number;
  description: string;
  value: SolicitationReplyStatusEnum;
}

export const solicitationsReplyStatus: SolicitationReplyStatus[] = [
  { code: 0, description: 'Réplica Pendente', value: SolicitationReplyStatusEnum.PENDING },
  { code: 1, description: 'Réplica Finalizada', value: SolicitationReplyStatusEnum.FINISHED }
];
