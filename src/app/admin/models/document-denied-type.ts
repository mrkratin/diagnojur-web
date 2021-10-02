export enum DocumentDeniedTypeEnum {
  UNREADABLE = 'UNREADABLE',
  INCORRECT = 'INCORRECT',
  FALSIFICATION = 'FALSIFICATION'
}

export interface DocumentDeniedType {
  code: number;
  value: DocumentDeniedTypeEnum;
  description: string;
}

export const documentDeniedTypes: DocumentDeniedType[] = [
  { code: 0, value: DocumentDeniedTypeEnum.UNREADABLE, description: 'Ilegível' },
  { code: 1, value: DocumentDeniedTypeEnum.INCORRECT, description: 'Incorreto' },
  { code: 2, value: DocumentDeniedTypeEnum.FALSIFICATION, description: 'Suspeita de Falsificação' }
];
