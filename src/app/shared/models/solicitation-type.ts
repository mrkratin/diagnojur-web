export enum SolicitationTypeEnum {
  SIMPLE = 'SIMPLE',
  COMPLETE = 'COMPLETE',
  SPECIFIC = 'SPECIFIC'
}

export interface SolicitationType {
  code: number;
  value: SolicitationTypeEnum;
  price: number;
  description: string;
  abstract: string;
}

export const solicitationTypes: SolicitationType[] = [
  {
    code: 0,
    value: SolicitationTypeEnum.SIMPLE,
    price: 80.0,
    description: 'Simples',
    abstract: 'Os três últimos lançamentos'
  },
  {
    code: 1,
    value: SolicitationTypeEnum.COMPLETE,
    price: 180.0,
    description: 'Completo',
    abstract: 'Todos os eventos'
  },
  {
    code: 2,
    value: SolicitationTypeEnum.SPECIFIC,
    price: 120.0,
    description: 'Especifico',
    abstract: 'Um evento especifico'
  }
];
