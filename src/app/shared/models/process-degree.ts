export enum ProcessDegreeEnum {
  FIRST = 'FIRST',
  SECOND = 'SECOND',
  THIRD = 'THIRD',
  FOURTH = 'FOURTH',
  UNKNOWN = 'UNKNOWN'
}

export interface ProcessDegree {
  code: number;
  value: ProcessDegreeEnum;
  description: string;
}

export const processDegrees: ProcessDegree[] = [
  { code: 0, value: ProcessDegreeEnum.FIRST, description: 'Primeiro Grau' },
  { code: 1, value: ProcessDegreeEnum.SECOND, description: 'Segundo Grau' },
  { code: 2, value: ProcessDegreeEnum.THIRD, description: 'Terceiro Grau' },
  { code: 3, value: ProcessDegreeEnum.FOURTH, description: 'Quarto Grau' },
  { code: 4, value: ProcessDegreeEnum.UNKNOWN, description: 'Não Sei' }
];
