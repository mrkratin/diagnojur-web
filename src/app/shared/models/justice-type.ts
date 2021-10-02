export enum JusticeTypeEnum {
  STATE = 'STATE',
  FEDERAL = 'FEDERAL'
}

export interface JusticeType {
  code: number;
  value: JusticeTypeEnum;
  description: string;
}

export const justiceTypes: JusticeType[] = [
  { code: 0, value: JusticeTypeEnum.STATE, description: 'Estadual' },
  { code: 1, value: JusticeTypeEnum.FEDERAL, description: 'Federal' }
];
