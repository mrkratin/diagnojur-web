export enum PartTypeEnum {
  DEFENDANT = 'DEFENDANT',
  AUTHOR = 'AUTHOR',
  JUDGE = 'JUDGE',
  LAWYER = 'LAWYER',
  COMPLAINANT = 'COMPLAINANT',
  CLAIMED = 'CLAIMED',
  APPLICANT = 'APPLICANT',
  REQUIRED = 'REQUIRED',
  ACTIVE_LITIS_CONSORT = 'ACTIVE_LITIS_CONSORT',
  PASSIVE_LITIS = 'PASSIVE_LITIS',
  THIRD_INTERESTED = 'THIRD_INTERESTED',
  ASSISTANT = 'ASSISTANT',
  INTERVENER = 'INTERVENER',
  AMICUS_CURIAE = 'AMICUS_CURIAE',
  EXEQUENT = 'EXEQUENT',
  EXEQUIDO = 'EXEQUIDO',
  YOU_BARGED = 'YOU_BARGED',
  EMBARGOED = 'EMBARGOED',
  APPELLANT = 'APPELLANT',
  APPEAL = 'APPEAL',
  AGGRAVATING = 'AGGRAVATING',
  AGGRAVATED = 'AGGRAVATED',
  EXCIPIENT = 'EXCIPIENT',
  EXCEPT = 'EXCEPT',
  REPRESENTATIVE = 'REPRESENTATIVE',
  AUTHOR_OF_THE_FACT = 'AUTHOR_OF_THE_FACT',
  VICTIM = 'VICTIM',
  IMPELLING = 'IMPELLING',
  IMPETRATED = 'IMPETRATED',
  INTERDICTING = 'INTERDICTING',
  INTERDICTED = 'INTERDICTED'
}

export interface PartType {
  code: number;
  value: PartTypeEnum;
  description: string;
}

export const partTypes: PartType[] = [
  { code: 0, value: PartTypeEnum.AUTHOR, description: 'Autor da Ação' },
  { code: 1, value: PartTypeEnum.DEFENDANT, description: 'Réu' },
  {
    code: 2,
    value: PartTypeEnum.JUDGE,
    description: 'Juiz Responsável'
  },
  { code: 3, value: PartTypeEnum.LAWYER, description: 'Advogado' },
  {
    code: 4,
    value: PartTypeEnum.COMPLAINANT,
    description: 'Reclamante'
  },
  { code: 5, value: PartTypeEnum.CLAIMED, description: 'Reclamado' },
  { code: 6, value: PartTypeEnum.APPLICANT, description: 'Requerente' },
  { code: 7, value: PartTypeEnum.REQUIRED, description: 'Requerido' },
  {
    code: 8,
    value: PartTypeEnum.ACTIVE_LITIS_CONSORT,
    description: 'Litisconsorte Ativo'
  },
  {
    code: 9,
    value: PartTypeEnum.PASSIVE_LITIS,
    description: 'Litisconsorte Passivo'
  },
  {
    code: 10,
    value: PartTypeEnum.THIRD_INTERESTED,
    description: 'Terceiro Interessado'
  },
  { code: 11, value: PartTypeEnum.ASSISTANT, description: 'Assistente' },
  {
    code: 12,
    value: PartTypeEnum.INTERVENER,
    description: 'Interveniente'
  },
  {
    code: 13,
    value: PartTypeEnum.AMICUS_CURIAE,
    description: 'Amicus Curiae'
  },
  { code: 14, value: PartTypeEnum.EXEQUENT, description: 'Exequente' },
  { code: 15, value: PartTypeEnum.EXEQUIDO, description: 'Exequido' },
  {
    code: 16,
    value: PartTypeEnum.YOU_BARGED,
    description: 'Embargaste'
  },
  { code: 17, value: PartTypeEnum.EMBARGOED, description: 'Embargado' },
  { code: 18, value: PartTypeEnum.APPELLANT, description: 'Apelante' },
  { code: 19, value: PartTypeEnum.APPEAL, description: 'Apelado' },
  {
    code: 20,
    value: PartTypeEnum.AGGRAVATING,
    description: 'Agravante'
  },
  { code: 21, value: PartTypeEnum.AGGRAVATED, description: 'Agravado' },
  { code: 22, value: PartTypeEnum.EXCIPIENT, description: 'Excipiente' },
  { code: 23, value: PartTypeEnum.EXCEPT, description: 'Excepto' },
  {
    code: 24,
    value: PartTypeEnum.REPRESENTATIVE,
    description: 'Representante'
  },
  {
    code: 25,
    value: PartTypeEnum.AUTHOR_OF_THE_FACT,
    description: 'Autor do Fato'
  },
  { code: 26, value: PartTypeEnum.VICTIM, description: 'Vítima' },
  { code: 27, value: PartTypeEnum.IMPELLING, description: 'Impetrando' },
  { code: 28, value: PartTypeEnum.IMPETRATED, description: 'Impetrado' },
  {
    code: 29,
    value: PartTypeEnum.INTERDICTING,
    description: 'Interditando'
  },
  {
    code: 30,
    value: PartTypeEnum.INTERDICTED,
    description: 'Interditado'
  }
];
