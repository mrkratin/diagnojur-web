import { ProcessDegreeEnum } from './process-degree';

export enum ProcessOrganEnum {
  FORUM = 'FORUM',
  JUIZADO = 'JUIZADO',
  VARAS = 'VARAS',
  JUNTA = 'JUNTA',
  TJ = 'TJ',
  TRF = 'TRF',
  TRT = 'TRT',
  TRE = 'TRE',
  TJM = 'TJM',
  TR = 'TR',
  STJ = 'STJ',
  TSE = 'TSE',
  STM = 'STM',
  TST = 'TST',
  STF = 'STF',
  UNKNOWN = 'UNKNOWN'
}

export interface ProcessOrgan {
  code: number;
  value: ProcessOrganEnum;
  description: string;
  degree: ProcessDegreeEnum;
}

export const processOrgans: ProcessOrgan[] = [
  { code: 0, value: ProcessOrganEnum.FORUM, description: 'Fórum', degree: ProcessDegreeEnum.FIRST },
  { code: 1, value: ProcessOrganEnum.JUIZADO, description: 'Juizado', degree: ProcessDegreeEnum.FIRST },
  { code: 2, value: ProcessOrganEnum.VARAS, description: 'Varas', degree: ProcessDegreeEnum.FIRST },
  { code: 3, value: ProcessOrganEnum.JUNTA, description: 'Junta', degree: ProcessDegreeEnum.FIRST },
  { code: 4, value: ProcessOrganEnum.TJ, description: 'Tribunal de Justiça', degree: ProcessDegreeEnum.SECOND },
  { code: 5, value: ProcessOrganEnum.TRF, description: 'Tribunal Regional Federal', degree: ProcessDegreeEnum.SECOND },
  {
    code: 6,
    value: ProcessOrganEnum.TRT,
    description: 'Tribunal Regional do Trabalho',
    degree: ProcessDegreeEnum.SECOND
  },
  {
    code: 7,
    value: ProcessOrganEnum.TRE,
    description: 'Tribunal Regional Eleitoral',
    degree: ProcessDegreeEnum.SECOND
  },
  {
    code: 8,
    value: ProcessOrganEnum.TJM,
    description: 'Tribunal de Justiça Militar',
    degree: ProcessDegreeEnum.SECOND
  },
  { code: 9, value: ProcessOrganEnum.TR, description: 'Turmas Recursais', degree: ProcessDegreeEnum.SECOND },
  {
    code: 10,
    value: ProcessOrganEnum.STJ,
    description: 'Superior Tribunal de Justiça',
    degree: ProcessDegreeEnum.THIRD
  },
  {
    code: 11,
    value: ProcessOrganEnum.TSE,
    description: 'Tribunal Superior Eleitoral',
    degree: ProcessDegreeEnum.THIRD
  },
  { code: 12, value: ProcessOrganEnum.STM, description: 'Superior Tribunal Militar', degree: ProcessDegreeEnum.THIRD },
  {
    code: 13,
    value: ProcessOrganEnum.TST,
    description: 'Tribunal Superior do Trabalho',
    degree: ProcessDegreeEnum.THIRD
  },
  { code: 14, value: ProcessOrganEnum.STF, description: 'Supremo Tribunal Federal', degree: ProcessDegreeEnum.FOURTH },
  { code: 15, value: ProcessOrganEnum.UNKNOWN, description: 'Não Sei', degree: ProcessDegreeEnum.UNKNOWN }
];
