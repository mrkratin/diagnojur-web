export enum AnalystStatusEnum {
  AVAILABLE = 'AVAILABLE',
  UNAVAILABLE = 'UNAVAILABLE',
  BANNED = 'BANNED',
  PENDING = 'PENDING'
}

export interface AnalystStatus {
  code: number;
  value: AnalystStatusEnum;
  description: string;
}

export const analystStatus: AnalystStatus[] = [
  { code: 0, value: AnalystStatusEnum.AVAILABLE, description: 'Disponivel' },
  { code: 1, value: AnalystStatusEnum.UNAVAILABLE, description: 'Indisponivel' },
  { code: 2, value: AnalystStatusEnum.BANNED, description: 'Banido' },
  { code: 3, value: AnalystStatusEnum.PENDING, description: 'Pendente' }
];
