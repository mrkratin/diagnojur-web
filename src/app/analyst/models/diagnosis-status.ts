export enum DiagnosisStatusEnum {
  NEW = 'NEW',
  COMPLETED = 'COMPLETED',
  ANALYZING = 'ANALYZING',
  CANCELED = 'CANCELED'
}

export interface DiagnosisStatus {
  code: number;
  value: DiagnosisStatusEnum;
  description: string;
}

export const diagnosticStatus: DiagnosisStatus[] = [
  { code: 0, description: 'Novo', value: DiagnosisStatusEnum.NEW },
  { code: 2, description: 'Concluído', value: DiagnosisStatusEnum.COMPLETED },
  { code: 3, description: 'Analisando', value: DiagnosisStatusEnum.ANALYZING },
  { code: 4, description: 'Cancelado', value: DiagnosisStatusEnum.CANCELED }
];
