export enum PartPoloEnum {
  ACTIVE = 'ACTIVE',
  PASSIVE = 'PASSIVE',
  INTERESTED_THIRD = 'INTERESTED_THIRD',
}

export interface PartPolo {
  code: number;
  value: PartPoloEnum;
  description: string;
}

export const partPolos: PartPolo[] = [
  { code: 0, value: PartPoloEnum.ACTIVE, description: 'Polo Ativo' },
  { code: 1, value: PartPoloEnum.PASSIVE, description: 'Polo Passivo' },
  {
    code: 1,
    value: PartPoloEnum.INTERESTED_THIRD,
    description: 'Terceiro Interessado',
  },
];
