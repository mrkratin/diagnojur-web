export enum DocumentStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DISAPPROVED = 'DISAPPROVED'
}

export interface DocumentStatus {
  code: number;
  value: DocumentStatusEnum;
  description: string;
}

export const documentStatus: DocumentStatus[] = [
  { code: 0, value: DocumentStatusEnum.PENDING, description: 'Pendente' },
  { code: 1, value: DocumentStatusEnum.APPROVED, description: 'Aprovado' },
  { code: 2, value: DocumentStatusEnum.DISAPPROVED, description: 'Reprovado' }
];
