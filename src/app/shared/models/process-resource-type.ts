export enum ProcessResourceTypeEnum {
  APPEAL = 'APPEAL',
  INTERLOCUTORY_APPEAL = 'INTERLOCUTORY_APPEAL',
  GRIEVANCE = 'GRIEVANCE',
  SPECIAL_APPEAL = 'SPECIAL_APPEAL',
  REQUESTS_FOR_CLARIFICATION = 'REQUESTS_FOR_CLARIFICATION',
  ORDINARY_APPEAL = 'ORDINARY_APPEAL',
  SPECIAL_RESOURCE = 'SPECIAL_RESOURCE',
  EXTRAORDINARY_APPEAL = 'EXTRAORDINARY_APPEAL',
  WITNESSABLE_LETTER = 'WITNESSABLE_LETTER',
  PARTIAL_CORRECTION = 'PARTIAL_CORRECTION',
  PETITION_GRIEVANCE = 'PETITION_GRIEVANCE',
  INFRINGING_EMBARGOES = 'INFRINGING_EMBARGOES',
  MAGAZINE_FEATURE = 'MAGAZINE_FEATURE',
  STRICT_SENSE_FEATURE = 'STRICT_SENSE_FEATURE',
  SECURITY_SUSPENSION_REQUEST = 'SECURITY_SUSPENSION_REQUEST',
  UNNAMED_FEATURE = 'UNNAMED_FEATURE',
  UNIFORMIZATION_INCIDENT = 'UNIFORMIZATION_INCIDENT',
  NONE = 'NONE',
  ORDINARY_FEATURE = 'ORDINARY_FEATURE'
}

export interface ProcessResourceType {
  code: number;
  value: ProcessResourceTypeEnum;
  description: string;
}

export const processResourceTypes: ProcessResourceType[] = [
  { code: 0, value: ProcessResourceTypeEnum.APPEAL, description: 'Apelação' },
  { code: 1, value: ProcessResourceTypeEnum.INTERLOCUTORY_APPEAL, description: 'Agravo de Instrumento' },
  { code: 2, value: ProcessResourceTypeEnum.GRIEVANCE, description: 'Agravo' },
  {
    code: 3,
    value: ProcessResourceTypeEnum.SPECIAL_APPEAL,
    description: 'Agravo em Recurso Especial ou Extraordinário'
  },
  { code: 4, value: ProcessResourceTypeEnum.REQUESTS_FOR_CLARIFICATION, description: 'Embargos de Declaração' },
  { code: 5, value: ProcessResourceTypeEnum.ORDINARY_APPEAL, description: 'Recurso Orginário' },
  { code: 6, value: ProcessResourceTypeEnum.SPECIAL_RESOURCE, description: 'Recurso Especial' },
  { code: 7, value: ProcessResourceTypeEnum.EXTRAORDINARY_APPEAL, description: 'Recurso Extraordinário' },
  { code: 8, value: ProcessResourceTypeEnum.WITNESSABLE_LETTER, description: 'Carta Testemunhável' },
  { code: 9, value: ProcessResourceTypeEnum.PARTIAL_CORRECTION, description: 'Correição Parcial' },
  { code: 10, value: ProcessResourceTypeEnum.PETITION_GRIEVANCE, description: 'Agravo de Petição' },
  { code: 11, value: ProcessResourceTypeEnum.INFRINGING_EMBARGOES, description: 'Regimental Appeal' },
  { code: 12, value: ProcessResourceTypeEnum.MAGAZINE_FEATURE, description: 'Recurso de Revista' },
  { code: 13, value: ProcessResourceTypeEnum.STRICT_SENSE_FEATURE, description: 'Recurso em Sentido Estrito' },
  {
    code: 14,
    value: ProcessResourceTypeEnum.SECURITY_SUSPENSION_REQUEST,
    description: 'Pedido de Suspensão de Segurança'
  },
  { code: 15, value: ProcessResourceTypeEnum.UNNAMED_FEATURE, description: 'Recurso Inominado' },
  { code: 16, value: ProcessResourceTypeEnum.UNIFORMIZATION_INCIDENT, description: 'Incidente de Uniformização' },
  { code: 17, value: ProcessResourceTypeEnum.NONE, description: 'Nenhum' },
  { code: 18, value: ProcessResourceTypeEnum.ORDINARY_FEATURE, description: 'Recurso Ordinário' }
];
