export enum SolicitationSpecificTypeEnum {
  AUDIENCE_MARKING = 'AUDIENCE_MARKING',
  RESULT_OF_INJUNCTION = 'RESULT_OF_INJUNCTION',
  AUDIENCE_RESULT = 'AUDIENCE_RESULT',
  SKILL_RESULT = 'SKILL_RESULT',
  SENTENCE_RESULT = 'SENTENCE_RESULT',
  PROGRESSION_RESULT = 'PROGRESSION_RESULT',
  APPEAL_RESULT = 'APPEAL_RESULT',
  SHIPPING_INFORMATION = 'SHIPPING_INFORMATION',
  AGREEMENT_RESULT = 'SCRUTINY_RESULT',
  ATTACHMENT_RESULT = 'ATTACHMENT_RESULT'
}

export interface SolicitationSpecificType {
  code: number;
  value: SolicitationSpecificTypeEnum;
  description: string;
}

export const specificTypes: SolicitationSpecificType[] = [
  { code: 0, value: SolicitationSpecificTypeEnum.AUDIENCE_MARKING, description: 'Marcação de Audiência' },
  { code: 2, value: SolicitationSpecificTypeEnum.RESULT_OF_INJUNCTION, description: 'Resultado de Liminar' },
  { code: 3, value: SolicitationSpecificTypeEnum.AUDIENCE_RESULT, description: 'Resultado de Audiência' },
  { code: 4, value: SolicitationSpecificTypeEnum.SKILL_RESULT, description: 'Resultado de Perícia' },
  { code: 5, value: SolicitationSpecificTypeEnum.SENTENCE_RESULT, description: 'Resultado de Sentença' },
  {
    code: 6,
    value: SolicitationSpecificTypeEnum.PROGRESSION_RESULT,
    description: 'Resultado Progressão de Pena/Regime'
  },
  { code: 7, value: SolicitationSpecificTypeEnum.APPEAL_RESULT, description: 'Resultado de Recurso' },
  {
    code: 8,
    value: SolicitationSpecificTypeEnum.SHIPPING_INFORMATION,
    description: 'Informação de Expedição de Alvará'
  },
  {
    code: 9,
    value: SolicitationSpecificTypeEnum.AGREEMENT_RESULT,
    description: 'Resultado de Acordo'
  },
  {
    code: 10,
    value: SolicitationSpecificTypeEnum.ATTACHMENT_RESULT,
    description: 'Resultado de Penhora ou Bloqueio'
  }
];
