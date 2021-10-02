export enum ProcessTypeEnum {
  CIVEL = 'CIVEL',
  CRIMINAL = 'CRIMINAL',
  LABOR = 'LABOR'
}

export interface ProcessType {
  code: number;
  value: ProcessTypeEnum;
  description: string;
}

export const processTypes: ProcessType[] = [
  { code: 0, value: ProcessTypeEnum.CIVEL, description: 'Cível' },
  { code: 1, value: ProcessTypeEnum.CRIMINAL, description: 'Criminal' },
  { code: 2, value: ProcessTypeEnum.LABOR, description: 'Trabalhista' }
];
